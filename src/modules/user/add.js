import { BadRequestError } from '../../helpers/errors.js';
import { usersDB } from '../../fakeData.js';

export const addUser = (request, response) => {
  const { name, job } = request.body;
  
  const requiredProps = ['name', 'job']
  requiredProps.forEach(prop => {
    if (!request.body[prop]) {
      throw new BadRequestError(`${prop} not provided!`)
    }
  })
  
  const id = !usersDB.length ? 1 : usersDB[usersDB.length - 1].id + 1;
  const newUser = { id, name, job };

  usersDB.push(newUser);
  response.status(201).send(newUser);
}; 
