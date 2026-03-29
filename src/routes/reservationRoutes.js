const express = require('express');
const router = express.Router();
const {
  createReservation,
  cancelReservation
} = require('../controllers/reservationController');

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/create-reservation', authMiddleware, roleMiddleware('user'), createReservation);
router.delete('/cancel-reservation/:id', authMiddleware, roleMiddleware('user'), cancelReservation);

module.exports = router;