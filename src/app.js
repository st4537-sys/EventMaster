const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const loggerMiddleware = require('./middlewares/loggerMiddleware');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminEventRoutes = require('./routes/adminEventRoutes');
const publicEventRoutes = require('./routes/publicEventRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/events', adminEventRoutes);
app.use('/events', publicEventRoutes);
app.use('/users/reservations', reservationRoutes);

module.exports = app;