import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Asistent API",
      version: "1.0.0",
      description: "API for managing Asistent",
      contact: {
        name: "Oscar Molina",
      },
    },
    servers: [
      // {
      //   url: "https://edu-incluye-backend.vercel.app/",
      //   description: "Running server",
      // },
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          // ✅ Nombre del esquema de seguridad
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [], // ✅ Aplica globalmente a todos los endpoints
      },
    ],
  },
  apis: ["dist/routes/*.js","src/routes/*.ts", ],
};

const specs = swaggerJsdoc(options);
export default specs;
