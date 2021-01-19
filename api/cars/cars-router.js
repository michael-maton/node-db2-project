const express = require("express");
const Cars = require("./cars-model");
const db = require("../../data/db-config.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  const env = process.env.NODE_ENV || "development";
  const message =
    env === "development" ? err.message : "something bad happened";
  res.status(500).json(message);
});

module.exports = router;
