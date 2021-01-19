const db = require("../../data/db-config.js");

module.exports = {
  get,
  getById,
  insert,
};

function get(id) {
  // select * from cars
  return db().from("cars");
}
function getById(id) {
  // SELECT * FROM posts WHERE id = 1;
  return db("cars").where("id", id).first();
}

function insert(car) {
  return db("cars")
    .insert(car)
    .then(([id]) => getById(id));
}
