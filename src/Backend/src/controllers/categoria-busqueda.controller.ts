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
import {CategoriaBusqueda} from '../models';
import {CategoriaBusquedaRepository} from '../repositories';

export class CategoriaBusquedaController {
  constructor(
    @repository(CategoriaBusquedaRepository)
    public categoriaBusquedaRepository : CategoriaBusquedaRepository,
  ) {}

  @post('/categoria-busquedas')
  @response(200, {
    description: 'CategoriaBusqueda model instance',
    content: {'application/json': {schema: getModelSchemaRef(CategoriaBusqueda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaBusqueda, {
            title: 'NewCategoriaBusqueda',
            exclude: ['id'],
          }),
        },
      },
    })
    categoriaBusqueda: Omit<CategoriaBusqueda, 'id'>,
  ): Promise<CategoriaBusqueda> {
    return this.categoriaBusquedaRepository.create(categoriaBusqueda);
  }

  @get('/categoria-busquedas/count')
  @response(200, {
    description: 'CategoriaBusqueda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CategoriaBusqueda) where?: Where<CategoriaBusqueda>,
  ): Promise<Count> {
    return this.categoriaBusquedaRepository.count(where);
  }

  @get('/categoria-busquedas')
  @response(200, {
    description: 'Array of CategoriaBusqueda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CategoriaBusqueda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CategoriaBusqueda) filter?: Filter<CategoriaBusqueda>,
  ): Promise<CategoriaBusqueda[]> {
    return this.categoriaBusquedaRepository.find(filter);
  }

  @patch('/categoria-busquedas')
  @response(200, {
    description: 'CategoriaBusqueda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaBusqueda, {partial: true}),
        },
      },
    })
    categoriaBusqueda: CategoriaBusqueda,
    @param.where(CategoriaBusqueda) where?: Where<CategoriaBusqueda>,
  ): Promise<Count> {
    return this.categoriaBusquedaRepository.updateAll(categoriaBusqueda, where);
  }

  @get('/categoria-busquedas/{id}')
  @response(200, {
    description: 'CategoriaBusqueda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CategoriaBusqueda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CategoriaBusqueda, {exclude: 'where'}) filter?: FilterExcludingWhere<CategoriaBusqueda>
  ): Promise<CategoriaBusqueda> {
    return this.categoriaBusquedaRepository.findById(id, filter);
  }

  @patch('/categoria-busquedas/{id}')
  @response(204, {
    description: 'CategoriaBusqueda PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaBusqueda, {partial: true}),
        },
      },
    })
    categoriaBusqueda: CategoriaBusqueda,
  ): Promise<void> {
    await this.categoriaBusquedaRepository.updateById(id, categoriaBusqueda);
  }

  @put('/categoria-busquedas/{id}')
  @response(204, {
    description: 'CategoriaBusqueda PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() categoriaBusqueda: CategoriaBusqueda,
  ): Promise<void> {
    await this.categoriaBusquedaRepository.replaceById(id, categoriaBusqueda);
  }

  @del('/categoria-busquedas/{id}')
  @response(204, {
    description: 'CategoriaBusqueda DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.categoriaBusquedaRepository.deleteById(id);
  }
}
