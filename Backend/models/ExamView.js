const mongoose = require("mongoose");

// Question Schema (Handles Both MCQs & Subjective)
const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  marks: { type: Number, required: true },
  questionType: { 
    type: String, 
    enum: ["MCQ", "Subjective", "Descriptive"], 
    required: true 
  },
  options: [{ type: String }], // Only for MCQs
  correctAnswer: { type: String }, // Only for MCQs
});

// Exam Schema
const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  language: { type: String },
  teacherName: { type: String },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }] // ✅ References Question Model
});

// ✅ Define & Export Models
const Exam = mongoose.model("Exam", ExamSchema);
const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Exam, Question };