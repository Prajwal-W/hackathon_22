const Project = require("../models/project.model");
const User = require("../models/user.model");

const createProject = async (req, res, next) => {
  const { ProjectName, ProjectStartDate, ProjectEndDate } = req.body;

  try {
    const Manager = await User.findOne({ _id: req.userId });

    const exisitingProject = await Project.findOne({
      ProjectName: ProjectName,
    });

    if (exisitingProject) {
      return res.status(400).json({ message: "Project already exists" });
    }

    const newProject = new Project({
      ProjectMangerName: Manager.Name,
      ProjectMangerEmail: Manager.Email,
      ProjectName: ProjectName,
      ProjectStartDate: ProjectStartDate,
      ProjectEndDate: ProjectEndDate,
    });
    await newProject.save();
    res.status(201).json({
      message: `Project ${newProject.ProjectName} Created`,
      newProject,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  const id = req.params.id;
  const { ProjectName, ProjectStartDate, ProjectEndDate } = req.body;

  try {
    const Manager = await User.findOne({ _id: req.userId });

    const newProject = new Project({
      ProjectMangerName: Manager.Name,
      ProjectMangerEmail: Manager.Email,
      ProjectName: ProjectName,
      ProjectStartDate: ProjectStartDate,
      ProjectEndDate: ProjectEndDate,
    });

    await Project.findByIdAndUpdate(id, newProject, { new: true });
    res.status(200).json({ message: `Project ${id} Updated`, newProject });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: `Project ${id} not found` });
    }
    res.status(202).json({ message: `Project ${id} Deleted`, project });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const getAllCurrentProjects = async (req, res, next) => {
  try {
    const Manager = await User.findOne({ _id: req.userId });
    const Projects = await Project.find({ ProjectMangerEmail: Manager.Email });
    res
      .status(200)
      .json({ message: `Fetched all ${Projects.length} projects`, Projects });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const Projects = await Project.find();
    res
      .status(200)
      .json({ message: `Fetched all ${Projects.length} projects`, Projects });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
  getAllCurrentProjects,
  getAllProjects,
};
