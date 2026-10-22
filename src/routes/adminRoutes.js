const express = require('express');
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  getAdminProfile
} = require('../controllers/adminController');

const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /admin/register:
 *   post:
 *     summary: Register admin
 *     tags: [Admin]
 *     responses:
 *       201:
 *         description: Admin registered successfully
 */
router.post('/register', registerAdmin);

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Login admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', loginAdmin);

/**
 * @swagger
 * /admin/profile:
 *   get:
 *     summary: Get authenticated admin profile
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted
 */
router.get('/profile', authMiddleware, getAdminProfile);

module.exports = router;