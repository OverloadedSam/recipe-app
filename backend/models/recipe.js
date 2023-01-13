const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required!'],
      minLength: 2,
      maxLength: 32,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'user id field is required!'],
      minLength: 2,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'image url is required!'],
    },
    creator: {
      type: mongoose.Types.ObjectId,
      required: [true, 'creator of the recipe is required!'],
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
