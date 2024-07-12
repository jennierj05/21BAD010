const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/', async (req, res) => {
  const { category, company } = req.query;
  try {
    const products = await Product.find({
      ...(category && { 'categories.categoryName': category }),
      ...(company && { 'company.name': company }),
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/top', async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  try {
    const products = await Product.find({
      ...(category && { 'categories.categoryName': category }),
      ...(minPrice && { price: { $gte: Number(minPrice) } }),
      ...(maxPrice && { price: { $lte: Number(maxPrice) } }),
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
