require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Import authentication middleware and routes
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const examRoutes = require("./routes/examRoutes");


const app = express();
app.use(express.json());
app.use(cors());

//  CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Allow frontend ports
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//  Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);


const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 const tempDir = path.join(__dirname, "temp-uploads");
 if (!fs.existsSync(tempDir)) {
 fs.mkdirSync(tempDir, { recursive: true });
 }
 cb(null, tempDir);
 },
 filename: function (req, file, cb) {
 crypto.randomBytes(16, (err, buf) => {
 if (err) return cb(err);
 cb(null, buf.toString("hex") + path.extname(file.originalname));
 });
 },
});

const upload = multer({ storage });

// MongoDB Connection
const MONGO_URI =
 process.env.MONGO_URI ||
 "mongodb+srv://tariqsamreen65:O334CLtJbsOwnDA1@fyp-project.73tk2.mongodb.net/?retryWrites=true&w=majority&appName=fyp-project";

mongoose
 .connect(MONGO_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 })
 .then(() => console.log("MongoDB Connected"))
 .catch((err) => console.error("MongoDB Connection Error:", err));

const conn = mongoose.connection;

// Initialize GridFS
let gfs, gridfsBucket;
conn.once("open", () => {
 gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
 bucketName: "uploads",
 });
 // Initialize stream
 gfs = Grid(conn.db, mongoose.mongo);
 gfs.collection("uploads");
 console.log("GridFS Initialized");
});

// Route to test file upload
app.post("/test-upload", upload.single("file"), (req, res) => {
 console.log("Received upload request");

 if (!req.file) {
 console.log("No file in request");
 return res.status(400).json({
 error: true,
 message: "No file uploaded",
 });
 }

 // Now we have the file on disk, stream it to GridFS
 const fileId = new mongoose.Types.ObjectId();
 const filename = Date.now() + "-" + req.file.originalname;

 console.log("Uploading file to GridFS:", {
 id: fileId,
 filename: filename,
 originalname: req.file.originalname,
 mimetype: req.file.mimetype,
 });

 // Create a read stream from the uploaded file
 const readStream = fs.createReadStream(req.file.path);

 // Create a write stream to GridFS
 const writeStream = gridfsBucket.openUploadStreamWithId(fileId, filename, {
 contentType: req.file.mimetype,
 metadata: {
 originalname: req.file.originalname,
 uploadedAt: new Date(),
 },
 });

 // Handle errors
 let uploadFailed = false;

 writeStream.on("error", (error) => {
 console.error("Error uploading to GridFS:", error);
 uploadFailed = true;

 // Clean up the temporary file
 fs.unlink(req.file.path, (unlinkErr) => {
 if (unlinkErr) console.error("Error deleting temp file:", unlinkErr);
 });

 if (!res.headersSent) {
 return res.status(500).json({
 error: true,
 message: "Failed to upload file to database",
 });
 }
 });

 writeStream.on("finish", () => {
 console.log("Upload to GridFS completed");

 // Clean up the temporary file
 fs.unlink(req.file.path, (unlinkErr) => {
 if (unlinkErr) console.error("Error deleting temp file:", unlinkErr);
 });

 if (!uploadFailed && !res.headersSent) {
 return res.status(200).json({
 success: true,
 fileId: fileId.toString(),
 filename: filename,
 message: "File uploaded successfully",
 });
 }
 });

 // Pipe the file to GridFS
 readStream.pipe(writeStream);
});

// Route to retrieve a file
app.get("/files/:filename", (req, res) => {
 gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
 if (err) {
 console.error("Error finding file:", err);
 return res.status(500).json({ error: "Error finding file" });
 }

 if (!file || file.length === 0) {
 return res.status(404).json({ error: "File not found" });
 }

 // Set the content type
 res.set("Content-Type", file.contentType);

 // Create read stream
 const readstream = gridfsBucket.openDownloadStream(file._id);

 // Handle errors on the readstream
 readstream.on("error", (err) => {
 console.error("Error streaming file:", err);
 return res.status(500).json({ error: "Error streaming file" });
 });

 // Pipe the file to the response
 readstream.pipe(res);
 });
});

// Route to check server status
app.get("/", (req, res) => {
 res.send("Alternative GridFS Upload Server is running");
});

//  Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(" Error:", err.stack);
  res.status(500).json({ message: "Something went wrong on the server!" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
 console.log(`Test server running on port ${PORT}`);
 console.log(`Test upload at: http://localhost:${PORT}/test-upload`);
});
