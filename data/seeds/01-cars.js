
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: '4Y1SL65806Z411439', make: "Nissan", model: "Sentra", mileage: 130500, transmission: "A", status: "Totaled", color: "blue" },
        { VIN: '3A1SL45846N434437', make: "VW", model: "GTI", mileage: 34742, transmission: "M", status: "Mint", color: "gray" },
        { VIN: '1D1SD45547V432549', make: "Toyota", model: "Highlander", mileage: 5685, transmission: "A", status: "New", color: "gray" }
      ]);
    });
};
