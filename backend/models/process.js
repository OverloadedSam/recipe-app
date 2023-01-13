const mongoose = require('mongoose');

const processSchema = new mongoose.Schema(
  {
    step: {
      type: String,
      required: [true, 'step is required!'],
      minLength: 2,
      trim: true,
    },
    recipe: {
      type: mongoose.Types.ObjectId,
      required: [true, 'recipe is required!'],
      ref: 'Recipe',
    },
  },
  { timestamps: true }
);

const Process = mongoose.model('Process', processSchema);

module.exports = Process;
