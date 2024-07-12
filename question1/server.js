const express = require('express');
const mongoose = require('mongoose');
const User = require('./models');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));
  app.post('/test/register', async (req, res) => {
    try {
      const { companyName, ownerName,rollNo,ownerEmail,accessCode } = req.body;
      if (!companyName || !ownerName || !ownerEmail || !rollNo||!accessCode) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const user = new User({
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode
      });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      if (error.code === 11000) {
        res.status(409).json({ message: 'User with the same clientID or ownerEmail already exists' });
      } else {
        res.status(500).send(error.message);
      }
    }
  });
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
