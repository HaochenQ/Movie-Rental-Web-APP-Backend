const mongoose = require("mongoose");
const Joi = require("joi");

const Customers = mongoose.model(
  "Customers",
  new mongoose.Schema({
    isGold: { type: Boolean, default: false, required: true },
    name: { type: String, required: true, minlength: 5, maxlength: 15 },
    phone: { type: String, required: true, minlength: 5, maxlength: 15 },
  })
);

function validateCustomer(cutsomer) {
  const schema = {
    isGold: Joi.boolean().required(),
    name: Joi.string().required().min(5).max(50),
    phone: Joi.string().required().min(5).max(50),
  };
  return Joi.validate(cutsomer, schema);
}

exports.Customers = Customers;
exports.validate = validateCustomer;
