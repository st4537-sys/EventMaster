const express = require('express');
const router = express.Router();

const {
  registerAdmin,
  loginAdmin
} = require('../controllers/adminController');

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

module.exports = router;