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
import {RegistroCategoria} from '../models';
import {RegistroCategoriaRepository} from '../repositories';

export class RegistroCategoriaController {
  constructor(
    @repository(RegistroCategoriaRepository)
    public registroCategoriaRepository : RegistroCategoriaRepository,
  ) {}

  @post('/registro-categorias')
  @response(200, {
    description: 'RegistroCategoria model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistroCategoria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroCategoria, {
            title: 'NewRegistroCategoria',
            exclude: ['id'],
          }),
        },
      },
    })
    registroCategoria: Omit<RegistroCategoria, 'id'>,
  ): Promise<RegistroCategoria> {
    return this.registroCategoriaRepository.create(registroCategoria);
  }

  @get('/registro-categorias/count')
  @response(200, {
    description: 'RegistroCategoria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistroCategoria) where?: Where<RegistroCategoria>,
  ): Promise<Count> {
    return this.registroCategoriaRepository.count(where);
  }

  @get('/registro-categorias')
  @response(200, {
    description: 'Array of RegistroCategoria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistroCategoria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistroCategoria) filter?: Filter<RegistroCategoria>,
  ): Promise<RegistroCategoria[]> {
    return this.registroCategoriaRepository.find(filter);
  }

  @patch('/registro-categorias')
  @response(200, {
    description: 'RegistroCategoria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroCategoria, {partial: true}),
        },
      },
    })
    registroCategoria: RegistroCategoria,
    @param.where(RegistroCategoria) where?: Where<RegistroCategoria>,
  ): Promise<Count> {
    return this.registroCategoriaRepository.updateAll(registroCategoria, where);
  }

  @get('/registro-categorias/{id}')
  @response(200, {
    description: 'RegistroCategoria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistroCategoria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RegistroCategoria, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistroCategoria>
  ): Promise<RegistroCategoria> {
    return this.registroCategoriaRepository.findById(id, filter);
  }

  @patch('/registro-categorias/{id}')
  @response(204, {
    description: 'RegistroCategoria PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroCategoria, {partial: true}),
        },
      },
    })
    registroCategoria: RegistroCategoria,
  ): Promise<void> {
    await this.registroCategoriaRepository.updateById(id, registroCategoria);
  }

  @put('/registro-categorias/{id}')
  @response(204, {
    description: 'RegistroCategoria PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() registroCategoria: RegistroCategoria,
  ): Promise<void> {
    await this.registroCategoriaRepository.replaceById(id, registroCategoria);
  }

  @del('/registro-categorias/{id}')
  @response(204, {
    description: 'RegistroCategoria DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.registroCategoriaRepository.deleteById(id);
  }
}
