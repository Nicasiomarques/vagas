import { Router } from 'express';

import {
  checkNumberOfAccesses,
  updateUserById,
  getUserByName,
  removeByName,
  getAllUsers,
  addUser,
} from '../modules/user/index.js';
import { whoCanAccess, permissionLevel, allowProps } from '../middlewares/index.js';

const userRouter = Router();
const allowedPropsForUsers = allowProps(['job', 'name']);

userRouter.get('/user', getUserByName);

userRouter
  .get('/users', getAllUsers)
  .post('/users', allowedPropsForUsers, addUser)
  .delete('/users', whoCanAccess([permissionLevel.delete]), removeByName);

userRouter.put(
  '/users/:id',
  whoCanAccess([permissionLevel.edit]),
  allowedPropsForUsers,
  updateUserById
);

userRouter.get('/users/access', checkNumberOfAccesses);

export default userRouter;
