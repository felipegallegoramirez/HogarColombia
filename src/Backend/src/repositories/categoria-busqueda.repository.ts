import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {CategoriaBusqueda, CategoriaBusquedaRelations, RegistroCategoria} from '../models';
import {RegistroCategoriaRepository} from './registro-categoria.repository';

export class CategoriaBusquedaRepository extends DefaultCrudRepository<
  CategoriaBusqueda,
  typeof CategoriaBusqueda.prototype.id,
  CategoriaBusquedaRelations
> {

  public readonly registroCategorias: HasManyRepositoryFactory<RegistroCategoria, typeof CategoriaBusqueda.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('RegistroCategoriaRepository') protected registroCategoriaRepositoryGetter: Getter<RegistroCategoriaRepository>,
  ) {
    super(CategoriaBusqueda, dataSource);
    this.registroCategorias = this.createHasManyRepositoryFactoryFor('registroCategorias', registroCategoriaRepositoryGetter,);
    this.registerInclusionResolver('registroCategorias', this.registroCategorias.inclusionResolver);
  }
}
