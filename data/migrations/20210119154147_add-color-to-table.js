const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema.table("cars", table => {
      // add color column to cars table, not requires, no restrictions
      table.text("color");
  })
};

exports.down = function(knex) {
  knex.schema.table("cars", tbl => {
      tbl.dropColumn("color");
  })
};
