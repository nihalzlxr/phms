const mongoose = require("mongoose");

const foodschema = mongoose.Schema({

    studentname:{type :String},
    food: { type: [String] } })

const Food = mongoose.model("Food", foodschema);

module.exports = Food;  