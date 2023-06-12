export const globalErrorHandler = (error, _request, response, _next) => {
  const status = error.statusCode || 500;
  const message = error.statusCode
    ? error.message
    : 'Erro interno do servidor!';
  console.log(error);
  response.status(status).send({ message });
};
