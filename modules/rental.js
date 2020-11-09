const mongoose = require("mongoose");
const Joi = require("joi");

const Rental = mongoose.model(
  "Rental",
  new mongoose.Schema({
    customer: {
      type: new mongoose.Schema({
        name: { type: String, required: true, minlength: 5, maxlength: 15 },
        isGold: { type: Boolean, default: false },
        phone: { type: String, required: true, minlength: 5, maxlength: 15 },
      }),
    },
    movie: {
      type: new mongoose.Schema({
        title: {
          type: String,
          trim: true,
          required: true,
          minlength: 5,
          maxlength: 15,
        },
        dailyRentalRate: { type: Number, min: 0, max: 255, required: true },
      }),
      required: true,
    },
    dateOut: { type: Date, required: true, default: Date.now },
    dateReturned: { type: Date },
    rentalFee: { type: Number, min: 0 },
  })
);
function validateRental(rental) {
  const schema = {
    customerId: Joi.string().required(),
    movieId: Joi.string().required(),
  };
  return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
