const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');
const Process = require('../models/process');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

/*
 * @ROUTE    GET /api/recipes
 * @DESC     Get all recipes
 * @ACCESS   Protect
 * */
module.exports.getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find().populate({
    path: 'creator',
    select: 'name userId',
  });

  res.json({
    success: true,
    status: 200,
    data: recipes,
  });
});
