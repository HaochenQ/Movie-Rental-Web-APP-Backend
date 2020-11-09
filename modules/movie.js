const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genre");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: { type: genreSchema, required: true },
    numberInStock: { type: Number, min: 0, max: 255 },
    dailyRentalRate: { type: Number, min: 0, max: 255 },
  })
);
function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    dailyRentalRate: Joi.number().min(0).max(10).required(),
  };
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
