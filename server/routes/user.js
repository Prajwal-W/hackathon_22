const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

// POST add a new user
router.post("/signup", userController.registerUser);

//GET get user information
router.post("/signin", userController.signinUser);

//GET all users
router.get("/all", userController.allUsers);

//GET all Members
router.get("/members", userController.allMembers);

//GET all Managers
router.get("/managers", userController.allManagers);

module.exports = router;
