// Function to simulate a check on a dependency or service
const checkDependency = () => {
  // Simulating a random check result (true or false)
  const isHealthy = Math.random() < 0.9; // 90% chance of being healthy
  return {
    name: 'Dependency',
    healthy: isHealthy,
    timestamp: new Date().toISOString(),
  };
};

export const healthCheck = (_request, response) => {
  const dependencyCheck = checkDependency();
  // Check if all dependencies are healthy
  const isAllHealthy = dependencyCheck.healthy;
  // Prepare the health check response
  const healthStatus = {
    status: isAllHealthy ? 'Online' : 'Degraded',
    timestamp: new Date().toISOString(),
    dependencies: [dependencyCheck],
  };
  // Set the response status code based on the health status
  const statusCode = isAllHealthy ? 200 : 503;
  // Send the health check response as JSON
  response.status(statusCode).json(healthStatus);
}
