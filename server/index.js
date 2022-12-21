const express = require("express");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("🎉 Database connected.");
    app.listen(process.env.PORT, function () {
      console.log("✨ App listening on port", this.address().port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
