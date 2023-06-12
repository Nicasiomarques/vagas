import { BadRequestError } from "../helpers/errors.js";

export const allowProps = (allowedProps =['']) => (req, _res, next) => {
  const filteredBody = Object.keys(req.body)
    .filter(key => allowedProps.includes(key))
    .reduce((obj, key) => {
      obj[key] = req.body[key];
      return obj;
    }, {});

  const invalidProps = Object.keys(req.body).filter(key => !allowedProps.includes(key));
  if (invalidProps.length > 0) {
    throw new BadRequestError(`Invalid properties: ${invalidProps.join(', ')}`);
  }

  req.body = filteredBody;
  next();
};
