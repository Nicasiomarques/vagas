import { BadRequestError, NotFoundError } from '../../helpers/errors.js';
import { incrementUserCall } from '../../helpers/globlals.js';
import { usersDB } from '../../fakeData.js';
import { ok } from '../../helpers/http.js';

export const getUserByName = (request, response) => {
  const { name } = request.query;
  if (!name) throw new BadRequestError('Name not provided!');

  const foundUser = usersDB.find(user => user.name === name);
  if (!foundUser) throw new NotFoundError('User not found!');

  incrementUserCall(name)
  return ok(response, foundUser);
};
