import authSwagger from "./auth.swagger";
import photoSwagger from "./photo.swagger";

const swaggerDocument = {
  openapi: "3.1.1",
  info: {
    title: "Cyber Pinterest API",
    version: "1.0.0",
  },
  server: [
    {
      url: "http://localhost:3069",
      description: "Local Server",
    },
    {
      url: "http://domaincuatoi:3069",
      description: "Product Server",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    ...authSwagger,
    ...photoSwagger,
  },
};

export default swaggerDocument;
