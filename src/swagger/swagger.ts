import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Asistent API',
            version: '1.0.0',
            description: 'API for managing Asistent',
            contact: {
                name: 'Oscar Molina'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['src/routes/*.ts'], 
};

const specs = swaggerJsdoc(options);
export default specs;