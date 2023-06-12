import { NotFoundError } from '../../helpers/errors.js';
import { usersDB } from '../../fakeData.js';
import { ok } from '../../helpers/http.js';

export const getAllUsers = (_request, response) => {
  if (!usersDB.length) throw new NotFoundError('No users found.');

  return ok(response, usersDB);
};
