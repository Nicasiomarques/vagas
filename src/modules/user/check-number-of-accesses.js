import { getUserAccessByName } from '../../helpers/globlals.js'
import { ok } from '../../helpers/http.js'

export const checkNumberOfAccesses = function (request, response) {
  const name = request.query.name;
  ok(response, `Usuário ${name} foi lido ${getUserAccessByName(name)} vezes.`);
};

