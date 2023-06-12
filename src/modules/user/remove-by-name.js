import { BadRequestError, NotFoundError } from '../../helpers/errors.js';
import { removeUserAccesses } from '../../helpers/globlals.js';
import { usersDB } from '../../fakeData.js';

export const removeByName = (request, response) =>  {
  const { name } = request.query
  if (!name) throw new BadRequestError('Name not provided!');

  const index = usersDB.findIndex(user => user.name === name);
  if (index === -1) throw new NotFoundError('User not found!');
  usersDB.splice(index, 1);
  removeUserAccesses(name)
  
  // Aqui o staus correcto seria 204 devido aos requisitos do projecto mantive 200
  return response.send('success');
}
