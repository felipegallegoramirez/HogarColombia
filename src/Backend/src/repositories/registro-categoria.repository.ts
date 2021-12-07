import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RegistroCategoria, RegistroCategoriaRelations, CategoriaBusqueda, Inmueble} from '../models';
import {CategoriaBusquedaRepository} from './categoria-busqueda.repository';
import {InmuebleRepository} from './inmueble.repository';

export class RegistroCategoriaRepository extends DefaultCrudRepository<
  RegistroCategoria,
  typeof RegistroCategoria.prototype.id,
  RegistroCategoriaRelations
> {

  public readonly categoriaBusqueda: BelongsToAccessor<CategoriaBusqueda, typeof RegistroCategoria.prototype.id>;

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof RegistroCategoria.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CategoriaBusquedaRepository') protected categoriaBusquedaRepositoryGetter: Getter<CategoriaBusquedaRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(RegistroCategoria, dataSource);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
    this.categoriaBusqueda = this.createBelongsToAccessorFor('categoriaBusqueda', categoriaBusquedaRepositoryGetter,);
    this.registerInclusionResolver('categoriaBusqueda', this.categoriaBusqueda.inclusionResolver);
  }
}
