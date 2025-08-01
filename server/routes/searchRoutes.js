// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const { searchCase } = require('../controllers/searchController');

router.post('/search', searchCase);

module.exports = router;
