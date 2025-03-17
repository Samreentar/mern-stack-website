const { Exam } = require("../models/Exam"); // ✅ Fixed Import Path

// ✅ Create Exam
exports.createExam = async (req, res) => {
  try {
    console.log("📥 Received Data:", req.body); // Debugging

    // Create new exam
    const exam = new Exam(req.body);
    await exam.save();

    res.status(201).json({ success: true, message: "✅ Exam created successfully!", exam });
  } catch (error) {
    console.error("❌ Error creating exam:", error); // Debugging
    res.status(500).json({ success: false, message: "Error creating exam", error });
  }
};

// ✅ Get Exam by ID
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);

    if (!exam) {
      return res.status(404).json({ success: false, message: "Exam not found" });
    }

    res.json({ success: true, exam });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// ✅ Get All Exams
exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json({ success: true, exams });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
