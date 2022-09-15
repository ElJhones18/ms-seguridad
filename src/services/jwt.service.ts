import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Keys} from '../config/Keys';
var jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class JwtService {
  constructor(/* Add @inject to inject parameters */) { }

  /**
   * Se genera un token con la información en formato de JWT
   * @param info datos que qeudarán en el token
   * @returns token firmado con la clave secreta
   */
  CrearToken(info: object): string {
    try {
      var token = jwt.sign(info, Keys.JwtSecretKey)
      return token;
    } catch (err) {
      throw err
    }
  }
}
