const express = require('express');
const router = express.Router();
const {
  getGenericToken,
  registerUser,
  loginUser
} = require('../controllers/userController');

/**
 * @swagger
 * /users/token/generic:
 *   get:
 *     summary: Generate generic token
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
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 */
router.post('/login', loginUser);

module.exports = router;