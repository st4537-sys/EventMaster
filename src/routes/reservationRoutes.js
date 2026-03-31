const express = require('express');
const router = express.Router();
const {
  createReservation,
  cancelReservation,
  getMyReservations
} = require('../controllers/reservationController');

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

/**
 * @swagger
 * /users/reservations/create-reservation:
 *   post:
 *     summary: Create reservation
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Reservation created successfully
 */
router.post('/create-reservation', authMiddleware, roleMiddleware('user'), createReservation);

/**
 * @swagger
 * /users/reservations/cancel-reservation/{id}:
 *   delete:
 *     summary: Cancel reservation
 *     tags: [Reservations]
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
 *         description: Reservation canceled successfully
 */
router.delete('/cancel-reservation/:id', authMiddleware, roleMiddleware('user'), cancelReservation);

/**
 * @swagger
 * /users/reservations/my-reservations:
 *   get:
 *     summary: Get my reservations
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reservation list
 */
router.get('/my-reservations', authMiddleware, roleMiddleware('user'), getMyReservations);

module.exports = router;