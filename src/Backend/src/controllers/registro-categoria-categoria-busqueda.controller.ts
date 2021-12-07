import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  RegistroCategoria,
  CategoriaBusqueda,
} from '../models';
import {RegistroCategoriaRepository} from '../repositories';

export class RegistroCategoriaCategoriaBusquedaController {
  constructor(
    @repository(RegistroCategoriaRepository)
    public registroCategoriaRepository: RegistroCategoriaRepository,
  ) { }

  @get('/registro-categorias/{id}/categoria-busqueda', {
    responses: {
      '200': {
        description: 'CategoriaBusqueda belonging to RegistroCategoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CategoriaBusqueda)},
          },
        },
      },
    },
  })
  async getCategoriaBusqueda(
    @param.path.string('id') id: typeof RegistroCategoria.prototype.id,
  ): Promise<CategoriaBusqueda> {
    return this.registroCategoriaRepository.categoriaBusqueda(id);
  }
}
