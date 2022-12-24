const express = require("express");
const {
  getAllTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller");

const router = express.Router();

// POST add a new Team
router.post("/", createTeam);

// GET all Teams
router.get("/all", getAllTeams);

// DELETE a Team by id
router.delete("/:id", deleteTeam);

// PUT update a Team by id
router.put("/:id", updateTeam);

module.exports = router;
