const express = require('express');
const router = express.Router();
const {
  getGenericToken,
  registerUser,
  loginUser
} = require('../controllers/userController');

const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /users/token/generic:
 *   get:
 *     summary: Generate generic token
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Token generated successfully
 */
router.get('/token/generic', getGenericToken);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register user
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get authenticated user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted
 */
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Access granted',
    user: req.user
  });
});

module.exports = router;