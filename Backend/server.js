const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/config');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/authRoutes'));
app.use('/countries', require('./routes/countryRoutes'));
app.use('/favorites', require('./routes/favoriteRoutes'));
app.use('/history', require('./routes/historyRoutes'));

const PORT = 8090;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
