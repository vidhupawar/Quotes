require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const quotesRoutes = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use('/quotes', quotesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
