const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const auth = require('../middlewares/authMiddlewares');

router.post('/', auth, favoriteController.addFavorite);
router.get('/', auth, favoriteController.getFavorites);
router.delete('/:id', auth, favoriteController.removeFavorite); // Add this line

module.exports = router;
