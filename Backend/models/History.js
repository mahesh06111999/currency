const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  search: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('History', HistorySchema);
