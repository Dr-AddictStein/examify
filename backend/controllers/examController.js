import mongoose from "mongoose";
import examModel from "../models/examModel.js";

export const getAllExams = async (req, res) => {
  const exams = await examModel.find({});
  res.status(200).json(exams);
};
export const getSingleExam = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }
  const exam = await examModel.findById(id);

  if (exam) {
    res.status(200).json(exam);
  } else {
    return res.status(400).json({ error: "No Such Exam Found.!." });
  }
};
export const createExam = async (req, res) => {
  try {
    const newExam = new examModel(req.body);
    const savedExam = await newExam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExam = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }
  const exam = await examModel.findOneAndUpdate({ _id: id }, { ...req.body });

  if (exam) {
    const toSend = await examModel.findById(id);
    res.status(200).json(toSend);
  } else {
    return res.status(400).json({ error: "No Such Exam Found.!." });
  }
};

export const deleteExam = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }

  const exam = await examModel.findOneAndDelete({ _id: id });

  if (exam) {
    res.status(200).json(exam);
  } else {
    return res.status(400).json({ error: "No Such exam Found.!." });
  }
};
