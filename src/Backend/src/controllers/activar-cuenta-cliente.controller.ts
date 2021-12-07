import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ActivarCuenta,
  Cliente,
} from '../models';
import {ActivarCuentaRepository} from '../repositories';

export class ActivarCuentaClienteController {
  constructor(
    @repository(ActivarCuentaRepository)
    public activarCuentaRepository: ActivarCuentaRepository,
  ) { }

  @get('/activar-cuentas/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to ActivarCuenta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof ActivarCuenta.prototype.id,
  ): Promise<Cliente> {
    return this.activarCuentaRepository.cliente(id);
  }
}
