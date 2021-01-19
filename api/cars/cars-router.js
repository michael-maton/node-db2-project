const express = require('express');
// const db = require('../../data/db-config.js');

const router = express.Router();

router.get("/", (req, res) => {
    console.log("hello");
})
module.exports = router;
