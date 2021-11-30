import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  ActivarCuenta,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteActivarCuentaController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/activar-cuentas', {
    responses: {
      '200': {
        description: 'Array of Cliente has many ActivarCuenta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ActivarCuenta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ActivarCuenta>,
  ): Promise<ActivarCuenta[]> {
    return this.clienteRepository.activarCuentas(id).find(filter);
  }

  @post('/clientes/{id}/activar-cuentas', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(ActivarCuenta)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivarCuenta, {
            title: 'NewActivarCuentaInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) activarCuenta: Omit<ActivarCuenta, 'id'>,
  ): Promise<ActivarCuenta> {
    return this.clienteRepository.activarCuentas(id).create(activarCuenta);
  }

  @patch('/clientes/{id}/activar-cuentas', {
    responses: {
      '200': {
        description: 'Cliente.ActivarCuenta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivarCuenta, {partial: true}),
        },
      },
    })
    activarCuenta: Partial<ActivarCuenta>,
    @param.query.object('where', getWhereSchemaFor(ActivarCuenta)) where?: Where<ActivarCuenta>,
  ): Promise<Count> {
    return this.clienteRepository.activarCuentas(id).patch(activarCuenta, where);
  }

  @del('/clientes/{id}/activar-cuentas', {
    responses: {
      '200': {
        description: 'Cliente.ActivarCuenta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ActivarCuenta)) where?: Where<ActivarCuenta>,
  ): Promise<Count> {
    return this.clienteRepository.activarCuentas(id).delete(where);
  }
}
