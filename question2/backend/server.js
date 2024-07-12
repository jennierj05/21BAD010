const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./config/db.js");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', require('./routes/products'));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});