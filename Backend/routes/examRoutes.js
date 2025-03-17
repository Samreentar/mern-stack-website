const express = require("express");
const { createExam, getExams, getExamById } = require("../controllers/examController");
const protect = require("../middleware/authMiddleware"); // JWT Authentication Middleware

const router = express.Router();

/* 
📌 Exam Routes - Accessible Based on Role 
----------------------------------------
🔹 GET    /api/exams/test     →  Test Route (Check if Exam Routes are Working)
🔹 POST   /api/exams/create   →  Create Exam (Teachers Only)
🔹 GET    /api/exams/         →  Get All Exams (Students & Teachers)
🔹 GET    /api/exams/:id      →  Get Single Exam by ID (Students & Teachers)
*/

// ✅ Test Route
router.get("/test", (req, res) => {
  res.json({ success: true, message: "📚 Exam Routes are Working!" });
});

// ✅ Create Exam (Only for Teachers)
router.post("/create", protect, createExam);

// ✅ Get All Exams (Students & Teachers)
router.get("/", getExams);

// ✅ Get a Single Exam by ID
router.get("/:id", protect, getExamById);

module.exports = router;
