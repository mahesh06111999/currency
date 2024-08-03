const axios = require('axios');

exports.getCountryByCurrencyCode = async (req, res) => {
  try {
    const { currencyCode } = req.params;
    const response = await axios.get(
      `https://restcountries.com/v3.1/currency/${currencyCode}`
    );
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching country data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
