const express = require('express');
const router = express.Router();

const { getAllEvents } = require('../controllers/eventController');

router.get('/get-all-events', getAllEvents);

module.exports = router;