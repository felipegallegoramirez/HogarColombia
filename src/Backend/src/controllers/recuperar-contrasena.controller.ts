import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RecuperarContrasena} from '../models';
import {RecuperarContrasenaRepository} from '../repositories';

export class RecuperarContrasenaController {
  constructor(
    @repository(RecuperarContrasenaRepository)
    public recuperarContrasenaRepository : RecuperarContrasenaRepository,
  ) {}

  @post('/recuperar-contrasenas')
  @response(200, {
    description: 'RecuperarContrasena model instance',
    content: {'application/json': {schema: getModelSchemaRef(RecuperarContrasena)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecuperarContrasena, {
            title: 'NewRecuperarContrasena',
            exclude: ['id'],
          }),
        },
      },
    })
    recuperarContrasena: Omit<RecuperarContrasena, 'id'>,
  ): Promise<RecuperarContrasena> {
    return this.recuperarContrasenaRepository.create(recuperarContrasena);
  }

  @get('/recuperar-contrasenas/count')
  @response(200, {
    description: 'RecuperarContrasena model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RecuperarContrasena) where?: Where<RecuperarContrasena>,
  ): Promise<Count> {
    return this.recuperarContrasenaRepository.count(where);
  }

  @get('/recuperar-contrasenas')
  @response(200, {
    description: 'Array of RecuperarContrasena model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RecuperarContrasena, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RecuperarContrasena) filter?: Filter<RecuperarContrasena>,
  ): Promise<RecuperarContrasena[]> {
    return this.recuperarContrasenaRepository.find(filter);
  }

  @patch('/recuperar-contrasenas')
  @response(200, {
    description: 'RecuperarContrasena PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecuperarContrasena, {partial: true}),
        },
      },
    })
    recuperarContrasena: RecuperarContrasena,
    @param.where(RecuperarContrasena) where?: Where<RecuperarContrasena>,
  ): Promise<Count> {
    return this.recuperarContrasenaRepository.updateAll(recuperarContrasena, where);
  }

  @get('/recuperar-contrasenas/{id}')
  @response(200, {
    description: 'RecuperarContrasena model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecuperarContrasena, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RecuperarContrasena, {exclude: 'where'}) filter?: FilterExcludingWhere<RecuperarContrasena>
  ): Promise<RecuperarContrasena> {
    return this.recuperarContrasenaRepository.findById(id, filter);
  }

  @patch('/recuperar-contrasenas/{id}')
  @response(204, {
    description: 'RecuperarContrasena PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecuperarContrasena, {partial: true}),
        },
      },
    })
    recuperarContrasena: RecuperarContrasena,
  ): Promise<void> {
    await this.recuperarContrasenaRepository.updateById(id, recuperarContrasena);
  }

  @put('/recuperar-contrasenas/{id}')
  @response(204, {
    description: 'RecuperarContrasena PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() recuperarContrasena: RecuperarContrasena,
  ): Promise<void> {
    await this.recuperarContrasenaRepository.replaceById(id, recuperarContrasena);
  }

  @del('/recuperar-contrasenas/{id}')
  @response(204, {
    description: 'RecuperarContrasena DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.recuperarContrasenaRepository.deleteById(id);
  }
}
