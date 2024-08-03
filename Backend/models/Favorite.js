const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
