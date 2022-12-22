const express = require("express");
const {
  getAllCurrentProjects,
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");
const { auth, roles } = require("../middlewares/auth");

const router = express.Router();

// GET all projects of current user
router.get("/", auth, getAllCurrentProjects);

// POST add a new project
router.post("/", auth, createProject);

// GET projects of all user
router.get("/all", auth, getAllProjects);

router.delete("/:id", auth, deleteProject);

router.put("/:id", auth, updateProject);

module.exports = router;
