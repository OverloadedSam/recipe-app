const express = require('express');
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId');
const auth = require('../middlewares/auth');
const { getRecipes, getRecipeById } = require('../controllers/recipes');

router.get('/recipes', auth, getRecipes);
router.get('/recipe/:id', validateObjectId('id'), auth, getRecipeById);

module.exports = router;
