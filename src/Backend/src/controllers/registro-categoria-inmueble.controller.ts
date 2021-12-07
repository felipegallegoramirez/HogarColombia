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
  RegistroCategoria,
  Inmueble,
} from '../models';
import {RegistroCategoriaRepository} from '../repositories';

export class RegistroCategoriaInmuebleController {
  constructor(
    @repository(RegistroCategoriaRepository) protected registroCategoriaRepository: RegistroCategoriaRepository,
  ) { }

  @get('/registro-categorias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'Array of RegistroCategoria has many Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inmueble>,
  ): Promise<Inmueble[]> {
    return this.registroCategoriaRepository.inmuebles(id).find(filter);
  }

  @post('/registro-categorias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'RegistroCategoria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inmueble)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof RegistroCategoria.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {
            title: 'NewInmuebleInRegistroCategoria',
            exclude: ['id'],
            optional: ['registroCategoriaId']
          }),
        },
      },
    }) inmueble: Omit<Inmueble, 'id'>,
  ): Promise<Inmueble> {
    return this.registroCategoriaRepository.inmuebles(id).create(inmueble);
  }

  @patch('/registro-categorias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'RegistroCategoria.Inmueble PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {partial: true}),
        },
      },
    })
    inmueble: Partial<Inmueble>,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.registroCategoriaRepository.inmuebles(id).patch(inmueble, where);
  }

  @del('/registro-categorias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'RegistroCategoria.Inmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.registroCategoriaRepository.inmuebles(id).delete(where);
  }
}
