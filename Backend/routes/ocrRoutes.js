const express = require("express");
const multer = require("multer");
const path = require("path");
const { extractCodeFromPdfAndSave } = require("../controllers/ocrController");

const router = express.Router();

// Multer storage config for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../temp-uploads")); // Save in temp-uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Add timestamp to filename
  },
});

const upload = multer({ storage });

// Route: POST /api/ocr/extract-code
router.post("/extract-code", upload.single("file"), extractCodeFromPdfAndSave);

module.exports = router;
