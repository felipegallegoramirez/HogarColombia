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
  CategoriaBusqueda,
  RegistroCategoria,
} from '../models';
import {CategoriaBusquedaRepository} from '../repositories';

export class CategoriaBusquedaRegistroCategoriaController {
  constructor(
    @repository(CategoriaBusquedaRepository) protected categoriaBusquedaRepository: CategoriaBusquedaRepository,
  ) { }

  @get('/categoria-busquedas/{id}/registro-categorias', {
    responses: {
      '200': {
        description: 'Array of CategoriaBusqueda has many RegistroCategoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RegistroCategoria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RegistroCategoria>,
  ): Promise<RegistroCategoria[]> {
    return this.categoriaBusquedaRepository.registroCategorias(id).find(filter);
  }

  @post('/categoria-busquedas/{id}/registro-categorias', {
    responses: {
      '200': {
        description: 'CategoriaBusqueda model instance',
        content: {'application/json': {schema: getModelSchemaRef(RegistroCategoria)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof CategoriaBusqueda.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroCategoria, {
            title: 'NewRegistroCategoriaInCategoriaBusqueda',
            exclude: ['id'],
            optional: ['categoriaBusquedaId']
          }),
        },
      },
    }) registroCategoria: Omit<RegistroCategoria, 'id'>,
  ): Promise<RegistroCategoria> {
    return this.categoriaBusquedaRepository.registroCategorias(id).create(registroCategoria);
  }

  @patch('/categoria-busquedas/{id}/registro-categorias', {
    responses: {
      '200': {
        description: 'CategoriaBusqueda.RegistroCategoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroCategoria, {partial: true}),
        },
      },
    })
    registroCategoria: Partial<RegistroCategoria>,
    @param.query.object('where', getWhereSchemaFor(RegistroCategoria)) where?: Where<RegistroCategoria>,
  ): Promise<Count> {
    return this.categoriaBusquedaRepository.registroCategorias(id).patch(registroCategoria, where);
  }

  @del('/categoria-busquedas/{id}/registro-categorias', {
    responses: {
      '200': {
        description: 'CategoriaBusqueda.RegistroCategoria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(RegistroCategoria)) where?: Where<RegistroCategoria>,
  ): Promise<Count> {
    return this.categoriaBusquedaRepository.registroCategorias(id).delete(where);
  }
}
