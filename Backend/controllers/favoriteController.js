const Favorite = require('../models/Favorite');

exports.addFavorite = async (req, res) => {
  const { country } = req.body;

  try {
    const newFavorite = new Favorite({
      user: req.user.id,
      country,
    });

    const favorite = await newFavorite.save();
    res.json(favorite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    await Favorite.findByIdAndRemove(req.params.id);
    res.json({ message: 'Favorite removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
