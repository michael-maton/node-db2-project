exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    // primary key
    table.increments();

    // VIN number for car, required, unique, max length 17 characters (varchar 17)
    table.string("VIN", 17).notNullable().unique();

    // Make/model/mileage of car, not unique, required
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();

    // transmission and status of car, not required
    table.string("transmission");
    table.string("status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
