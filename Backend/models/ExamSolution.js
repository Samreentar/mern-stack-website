const mongoose = require("mongoose");

const ExamSolutionSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  extractedText: { type: String, required: true },
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const ExamSolution = mongoose.model("ExamSolution", ExamSolutionSchema);

module.exports = ExamSolution;
