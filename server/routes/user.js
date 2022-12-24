const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

// POST add a new user
router.post("/signup", userController.registerUser);

//GET get user information
router.get("/signin", userController.signinUser);

//GET all users
router.get("/all", userController.allUsers);

module.exports = router;
