import { ForbiddenError } from "../helpers/errors.js";

export const permissionLevel = {
  edit: 'edit',
  delete: 'delete',
  admin: 'admin'
}

export const whoCanAccess = (permittedRoles = ['']) => (request, _response, next) => {
  const myRole = request.headers['level_permission_key'] || '';
  if(!myRole) throw new ForbiddenError("Your access level don't permit perform this operation!");

  const rolesPermitted = [...permittedRoles, permissionLevel.admin]
  const hasPermittedRole = rolesPermitted.some(role => myRole.includes(role));

  if (!hasPermittedRole) {
    throw new ForbiddenError("Your access level don't permit perform this operation!");
  }

  next();
};
