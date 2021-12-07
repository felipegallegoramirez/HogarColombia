import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  RecuperarContrasena,
  Cliente,
} from '../models';
import {RecuperarContrasenaRepository} from '../repositories';

export class RecuperarContrasenaClienteController {
  constructor(
    @repository(RecuperarContrasenaRepository)
    public recuperarContrasenaRepository: RecuperarContrasenaRepository,
  ) { }

  @get('/recuperar-contrasenas/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to RecuperarContrasena',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof RecuperarContrasena.prototype.id,
  ): Promise<Cliente> {
    return this.recuperarContrasenaRepository.cliente(id);
  }
}
