export function ok(response, data) {
  response.status(200).send(data);
}
