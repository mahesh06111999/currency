const History = require('../models/History');

exports.addHistory = async (req, res) => {
  const { search } = req.body;

  try {
    const newHistory = new History({
      user: req.user.id,
      search,
    });

    const history = await newHistory.save();
    res.json(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find({ user: req.user.id })
      .limit(5)
      .sort({ _id: -1 });
    res.json(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
