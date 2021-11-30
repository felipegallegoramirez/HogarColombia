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
  SolicitudCliente,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteSolicitudClienteController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/solicitud-clientes', {
    responses: {
      '200': {
        description: 'Array of Cliente has many SolicitudCliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SolicitudCliente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudCliente>,
  ): Promise<SolicitudCliente[]> {
    return this.clienteRepository.solicitudClientes(id).find(filter);
  }

  @post('/clientes/{id}/solicitud-clientes', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudCliente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudCliente, {
            title: 'NewSolicitudClienteInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) solicitudCliente: Omit<SolicitudCliente, 'id'>,
  ): Promise<SolicitudCliente> {
    return this.clienteRepository.solicitudClientes(id).create(solicitudCliente);
  }

  @patch('/clientes/{id}/solicitud-clientes', {
    responses: {
      '200': {
        description: 'Cliente.SolicitudCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudCliente, {partial: true}),
        },
      },
    })
    solicitudCliente: Partial<SolicitudCliente>,
    @param.query.object('where', getWhereSchemaFor(SolicitudCliente)) where?: Where<SolicitudCliente>,
  ): Promise<Count> {
    return this.clienteRepository.solicitudClientes(id).patch(solicitudCliente, where);
  }

  @del('/clientes/{id}/solicitud-clientes', {
    responses: {
      '200': {
        description: 'Cliente.SolicitudCliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudCliente)) where?: Where<SolicitudCliente>,
  ): Promise<Count> {
    return this.clienteRepository.solicitudClientes(id).delete(where);
  }
}
