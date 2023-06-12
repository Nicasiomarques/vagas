import swaggerUi from 'swagger-ui-express';
import { importFile } from "../helpers/import-file.js";

export const addSwaggerRoute = async app => {
  const swaggerSchema = await importFile('./swagger.json');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSchema));
}
 