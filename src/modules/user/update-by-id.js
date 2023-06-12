import { BadRequestError } from '../../helpers/errors.js';
import { usersDB } from '../../fakeData.js';
import { ok } from '../../helpers/http.js';

export function updateUserById(request, response) {
  const { id } = request.params;
  if (!id) throw new BadRequestError('User Id not provided!');
  const keysToUpdate = Object.keys(request.body)
  if (!keysToUpdate.length) throw new BadRequestError('No properties to update!')

  const foundUser = usersDB.find(user => user.id === Number(id));
  if (!foundUser) throw new BadRequestError('User not found!');

  keysToUpdate.forEach(prop => {
    foundUser[prop] = request.body[prop]
  })
  return ok(response, foundUser);
}
