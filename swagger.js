const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EventMaster API',
      version: '1.0.0',
      description: 'API para control de aforo y reservas de eventos en tiempo real'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    tags: [
      { name: 'Users', description: 'User authentication and profile' },
      { name: 'Admin', description: 'Admin authentication' },
      { name: 'Events', description: 'Public events' },
      { name: 'Admin Events', description: 'Admin event management' },
      { name: 'Reservations', description: 'Reservation management' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;