import mongoose from "mongoose";
import moduleModel from "../models/moduleModel.js";


export const getAllModules = async (req, res) => {
  try {
    const modules = await moduleModel.find().populate("section");
    res.status(200).json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleModule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
    const module = await moduleModel.findById(id).populate("section");
  
    if (module) {
      res.status(200).json(module);
    } else {
      return res.status(400).json({ error: "No Such module Found.!." });
    }
  };

export const createModule = async (req, res) => {
  try {
    const newModule = new moduleModel(req.body);
    const savedModule = await newModule.save();
    res.status(201).json(savedModule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateModule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
    const module = await moduleModel.findOneAndUpdate({ _id: id }, { ...req.body });
  
    if (module) {
      const toSend = await moduleModel.findById(id);
      res.status(200).json(toSend);
    } else {
      return res.status(400).json({ error: "No Such module Found.!." });
    }
  };


  export const deleteModule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID.!." });
    }
  
    const module = await moduleModel.findOneAndDelete({ _id: id });
  
    if (module) {
      res.status(200).json(module);
    } else {
      return res.status(400).json({ error: "No Such Module Found.!." });
    }
  };
  
