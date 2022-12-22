const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = user.id;
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};

const roles = async (req, res, next, role) => {
  try {
    const user = await User.findOne({ id: req.userId });
    if (user.Role === role) {
      next();
    }
    res.status(400).res({ message: "You are not Authorized." });
  } catch (error) {}
};

module.exports = { auth, roles };
