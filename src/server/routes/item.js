const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');

// items end-point
router.get('/allItems', itemController.getAllItems);
router.get('/items', itemController.getItemsByName);
router.get('/allDietaryTypes', itemController.getAllDietaryTypes);

module.exports = router;
