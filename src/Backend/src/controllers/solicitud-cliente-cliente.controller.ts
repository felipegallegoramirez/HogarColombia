import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SolicitudCliente,
  Cliente,
} from '../models';
import {SolicitudClienteRepository} from '../repositories';

export class SolicitudClienteClienteController {
  constructor(
    @repository(SolicitudClienteRepository)
    public solicitudClienteRepository: SolicitudClienteRepository,
  ) { }

  @get('/solicitud-clientes/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to SolicitudCliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof SolicitudCliente.prototype.id,
  ): Promise<Cliente> {
    return this.solicitudClienteRepository.cliente(id);
  }
}
