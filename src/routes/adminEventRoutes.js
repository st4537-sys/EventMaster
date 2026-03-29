const express = require('express');
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/get-all-events', getAllEvents);
router.post('/create-event', authMiddleware, roleMiddleware('admin'), createEvent);
router.put('/update-event/:id', authMiddleware, roleMiddleware('admin'), updateEvent);
router.delete('/delete-event/:id', authMiddleware, roleMiddleware('admin'), deleteEvent);

module.exports = router;