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
  RecuperarContrasena,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteRecuperarContrasenaController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/recuperar-contrasenas', {
    responses: {
      '200': {
        description: 'Array of Cliente has many RecuperarContrasena',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RecuperarContrasena)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RecuperarContrasena>,
  ): Promise<RecuperarContrasena[]> {
    return this.clienteRepository.recuperarContrasenas(id).find(filter);
  }

  @post('/clientes/{id}/recuperar-contrasenas', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(RecuperarContrasena)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecuperarContrasena, {
            title: 'NewRecuperarContrasenaInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) recuperarContrasena: Omit<RecuperarContrasena, 'id'>,
  ): Promise<RecuperarContrasena> {
    return this.clienteRepository.recuperarContrasenas(id).create(recuperarContrasena);
  }

  @patch('/clientes/{id}/recuperar-contrasenas', {
    responses: {
      '200': {
        description: 'Cliente.RecuperarContrasena PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecuperarContrasena, {partial: true}),
        },
      },
    })
    recuperarContrasena: Partial<RecuperarContrasena>,
    @param.query.object('where', getWhereSchemaFor(RecuperarContrasena)) where?: Where<RecuperarContrasena>,
  ): Promise<Count> {
    return this.clienteRepository.recuperarContrasenas(id).patch(recuperarContrasena, where);
  }

  @del('/clientes/{id}/recuperar-contrasenas', {
    responses: {
      '200': {
        description: 'Cliente.RecuperarContrasena DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(RecuperarContrasena)) where?: Where<RecuperarContrasena>,
  ): Promise<Count> {
    return this.clienteRepository.recuperarContrasenas(id).delete(where);
  }
}
