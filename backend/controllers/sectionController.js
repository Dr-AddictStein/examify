import mongoose from "mongoose";
import sectionModel from "../models/sectionModel.js";

export const getAllSections = async (req, res) => {
  try {
    const sections = await sectionModel.find().populate("exam");
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleSection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
    const section = await sectionModel.findById(id).populate("exam");
  
    if (section) {
      res.status(200).json(section);
    } else {
      return res.status(400).json({ error: "No Such Section Found.!." });
    }
  };

export const createSection = async (req, res) => {
  try {
    const newSection = new sectionModel(req.body);
    const savedSection = await newSection.save();
    res.status(201).json(savedSection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
    const section = await sectionModel.findOneAndUpdate({ _id: id }, { ...req.body });
  
    if (section) {
      const toSend = await sectionModel.findById(id);
      res.status(200).json(toSend);
    } else {
      return res.status(400).json({ error: "No Such Section Found.!." });
    }
  };


  export const deleteSection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
  
    const section = await sectionModel.findOneAndDelete({ _id: id });
  
    if (section) {
      res.status(200).json(section);
    } else {
      return res.status(400).json({ error: "No Such Section Found.!." });
    }
  };
  
