const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { getRecipes } = require('../controllers/recipes');

router.get('/recipes', auth, getRecipes);

module.exports = router;
