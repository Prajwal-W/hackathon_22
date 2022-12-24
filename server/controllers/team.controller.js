const Team = require("../models/team.model");

const createTeam = async (req, res, next) => {
  const {
    TeamName,
    TeamStartDate,
    TeamEndDate,
    TeamLeadName,
    TeamLeadEmail,
    TeamMembers,
  } = req.body;

  try {
    const exisitinTeam = await Team.findOne({
      TeamName: TeamName,
    });

    if (exisitinTeam) {
      return res.status(400).json({ message: "Team already exists" });
    }

    const newTeam = new Team({
      TeamName: TeamName,
      TeamStartDate: TeamStartDate,
      TeamEndDate: TeamEndDate,
      TeamLeadName: TeamLeadName,
      TeamLeadEmail: TeamLeadEmail,
      TeamMembers: TeamMembers,
    });
    await newTeam.save();
    res.status(201).json({
      message: `Team ${newTeam.TeamName} Created`,
      newTeam,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const updateTeam = async (req, res, next) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: `Team ${req.params.id} Updated`, updatedTeam});
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const deleteTeam = async (req, res, next) => {
  const id = req.params.id;
  try {
    const team = await Team.findByIdAndDelete(id);
    if (!team) {
      return res.status(404).json({ message: `Team ${id} not found` });
    }
    res.status(202).json({ message: `Team ${id} Deleted`, team });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res
      .status(200)
      .json({ message: `Fetched all ${teams.length} Teams`, teams });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

module.exports = {
  getAllTeams,
  createTeam,
  updateTeam,
  deleteTeam,
};
