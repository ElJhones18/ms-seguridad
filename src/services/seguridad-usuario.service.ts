import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {CredencialesLogin} from '../models';
import {UsuarioRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class SeguridadUsuarioService {
  constructor(
    @repository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository
  ) { }

  /**
   * Método para la autenticación de usuarios
   * @param credenciales credenciales de acceso
   * @returnscadena con el token cuando todo esta bien o cadena vacia cuando no coinciden las credenciales
   */
  async IdentificarUsuario(credenciales: CredencialesLogin): Promise<string> {
    let response = ""
    let esValido = await this.usuarioRepository.findOne(
      {
        where: {
          correo: credenciales.nombreUsuario,
          clave: credenciales.clave
        }
      }
    )

    if (esValido) {
      //creacion del token y asignación a response
    }

    return response;
  }
}
