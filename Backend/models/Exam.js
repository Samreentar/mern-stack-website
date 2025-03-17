const mongoose = require("mongoose");

// Question Schema
const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  marks: { type: Number, required: true },
  questionType: { 
    type: String, 
    enum: ["MCQ", "Subjective", "Descriptive"], 
    required: true 
  },
  options: [{ type: String }], // For MCQs
  correctAnswer: { type: String } // For MCQs
});

// Exam Schema
const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  language: { type: String },
  teacherName: { type: String },
  questions: [QuestionSchema] // ✅ Direct Embedded Questions (Fixed Reference)
});

// ✅ Export Models
const Exam = mongoose.model("Exam", ExamSchema);
const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Exam, Question };
