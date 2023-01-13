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

/*
 * @ROUTE    GET /api/recipe/:id
 * @DESC     Get recipe full details with steps/process.
 * @ACCESS   Protect
 * */
module.exports.getRecipeById = asyncHandler(async (req, res, next) => {
  const recipeId = req.params.id;

  const recipe = await Recipe.findById(recipeId).select('-__v -updatedAt');
  if (!recipe) {
    const message = `Recipe not found with given id: ${recipeId}`;
    return next(new ErrorResponse(404, message));
  }

  const ingredients = await Ingredient.find({ recipe: recipeId }).select(
    '-recipe -__v -createdAt -updatedAt'
  );

  const process = await Process.find({ recipe: recipeId })
    .select('-recipe -__v -createdAt -updatedAt')
    .sort({ createdAt: 'asc' });

  res.json({
    success: true,
    status: 200,
    data: { ...recipe._doc, ingredients, process },
  });
});
