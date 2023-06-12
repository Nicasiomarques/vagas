import { createServer } from 'http';
import 'dotenv/config'

import app from './app.js'

const server = createServer(app)

const port = process.env.PORT || 3000;
const shutdownTimeout = process.env.SHUTDOWN_TIMEOUT || 5000

const gracefulShutdown = () => {
  console.log('Received termination signal. Starting graceful shutdown...');
  server.close((err) => {
    if (err) {
      console.error('Error occurred while closing server:', err);
      process.exit(1);
    }
    console.log('Server closed. Exiting process.');
    process.exit(0);
  });

  // Forcefully close the server after a certain timeout
  setTimeout(() => {
    console.error('Could not close server gracefully in time. Forcing shutdown...');
    process.exit(1);
  }, shutdownTimeout).unref();
};

// Handle termination signals
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

server.listen(port, function () {
  console.log(`Express server listening on port  ${port}`);
});
