const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, 'item is required!'],
      minLength: 2,
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, 'ingredient amount is required!'],
    },
    unit: {
      type: String,
      required: [true, 'ingredient unit is required!'],
    },
    recipe: {
      type: mongoose.Types.ObjectId,
      required: [true, 'recipe is required!'],
      ref: 'Recipe',
    },
  },
  { timestamps: true }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
