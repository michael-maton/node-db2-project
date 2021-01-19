const db = require('../../data/db-config.js');

module.exports = {
    get,
    insert,
  };
  
  function get(id) {
    return db().from("cars").select("id as p_id", "title", "contents")
  }
  
  function insert(project) {
    return db("projects")
      .insert(project, "id")
      .then(([id]) => get(id));
  }