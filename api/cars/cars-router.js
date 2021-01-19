const express = require("express");
const Cars = require("./cars-model");
// const db = require("../../data/db-config.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  //   db("cars")
  //     .then((cars) => {
  //       res.json(cars);
  //     })
  //     .catch(next);
  try {
    const data = await Cars.get();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
    try {
      const data = await Cars.getById(req.params.id)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })
  
  router.post('/', async (req, res, next) => {
    try {
      const data = await Cars.insert(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })

router.use((err, req, res, next) => {
  const env = process.env.NODE_ENV || "development";
  const message =
    env === "development" ? err.message : "something bad happened";
  res.status(500).json(message);
});

module.exports = router;
