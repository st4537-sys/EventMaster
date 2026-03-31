const express = require('express');
const router = express.Router();

const { getAllEvents } = require('../controllers/eventController');

/**
 * @swagger
 * /events/get-all-events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Event list
 */
router.get('/get-all-events', getAllEvents);

/**
 * @swagger
 * /events/getall-events:
 *   get:
 *     summary: Get all events (contract version)
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Event list
 */
router.get('/getall-events', getAllEvents);

module.exports = router;