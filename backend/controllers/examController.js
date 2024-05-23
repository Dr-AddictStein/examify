import examModel from "../models/examModel.js";

export const createExam = async (req, res) => {
  try {
    const newExam = new examModel(req.body);
    const savedExam = await newExam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
