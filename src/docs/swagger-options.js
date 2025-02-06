import * as path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Información de la API',
    },
  },
  apis: [path.resolve("./src/docs/**/*.yaml")],
}

export const specs = swaggerJSDoc(swaggerOptions)