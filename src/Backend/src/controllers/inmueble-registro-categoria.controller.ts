import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmueble,
  RegistroCategoria,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleRegistroCategoriaController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/registro-categoria', {
    responses: {
      '200': {
        description: 'RegistroCategoria belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RegistroCategoria)},
          },
        },
      },
    },
  })
  async getRegistroCategoria(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
  ): Promise<RegistroCategoria> {
    return this.inmuebleRepository.registroCategoria(id);
  }
}
