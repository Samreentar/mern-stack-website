const { exec } = require("child_process");
const path = require("path");
const ExamSolution = require("../models/ExamSolution");

// Function to handle OCR extraction and save to database
exports.extractCodeFromPdfAndSave = (req, res) => {
  const filePath = req.file.path;

  // Path to Python OCR script
  const pythonScript = path.join(__dirname, "../ocr/ocr_service.py");

  // Command to run the OCR script
  const command = `python "${pythonScript}" "${filePath}"`;

  exec(command, async (err, stdout, stderr) => {
    if (err) {
      console.error("OCR Error:", err);
      return res.status(500).json({ error: "OCR failed" });
    }

    const extractedText = stdout;

    try {
      const examSolution = new ExamSolution({
        studentId: req.body.studentId,
        examId: req.body.examId,
        extractedText: extractedText,
        fileName: req.file.originalname,
        filePath: req.file.path,
      });

      await examSolution.save();

      res.status(200).json({ message: "OCR extracted and saved successfully!" });
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ error: "Error saving OCR extracted text to the database" });
    }
  });
};
