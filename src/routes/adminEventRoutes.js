const express = require('express');
const router = express.Router();

const {
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

/**
 * @swagger
 * /admin/events/create-event:
 *   post:
 *     summary: Create event
 *     tags: [Admin Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Event created successfully
 */
router.post('/create-event', authMiddleware, roleMiddleware('admin'), createEvent);

/**
 * @swagger
 * /admin/events/update-event/{id}:
 *   put:
 *     summary: Update event
 *     tags: [Admin Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 */
router.put('/update-event/:id', authMiddleware, roleMiddleware('admin'), updateEvent);

/**
 * @swagger
 * /admin/events/updateevent/{id}:
 *   put:
 *     summary: Update event (contract version)
 *     tags: [Admin Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 */
router.put('/updateevent/:id', authMiddleware, roleMiddleware('admin'), updateEvent);

/**
 * @swagger
 * /admin/events/delete-event/{id}:
 *   delete:
 *     summary: Delete event
 *     tags: [Admin Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event deleted successfully
 */
router.delete('/delete-event/:id', authMiddleware, roleMiddleware('admin'), deleteEvent);

module.exports = router;