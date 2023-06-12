import express from 'express';
import cors from 'cors'

import { addSwaggerRoute } from './modules/swagger-documentation.js';
import { globalErrorHandler } from './middlewares/index.js';
import { healthCheck } from './modules/health-check.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(cors())
app.use(express.json());

app.get('/health', healthCheck);
addSwaggerRoute(app)

app.use(userRoutes);

app.use(globalErrorHandler);

export default app;
