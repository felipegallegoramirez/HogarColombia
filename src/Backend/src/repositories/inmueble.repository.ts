import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, RegistroCategoria, SolicitudCliente, Asesor} from '../models';
import {RegistroCategoriaRepository} from './registro-categoria.repository';
import {SolicitudClienteRepository} from './solicitud-cliente.repository';
import {AsesorRepository} from './asesor.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype.id,
  InmuebleRelations
> {

  public readonly registroCategoria: BelongsToAccessor<RegistroCategoria, typeof Inmueble.prototype.id>;

  public readonly solicitudClientes: HasManyRepositoryFactory<SolicitudCliente, typeof Inmueble.prototype.id>;

  public readonly asesor: BelongsToAccessor<Asesor, typeof Inmueble.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('RegistroCategoriaRepository') protected registroCategoriaRepositoryGetter: Getter<RegistroCategoriaRepository>, @repository.getter('SolicitudClienteRepository') protected solicitudClienteRepositoryGetter: Getter<SolicitudClienteRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Inmueble, dataSource);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.solicitudClientes = this.createHasManyRepositoryFactoryFor('solicitudClientes', solicitudClienteRepositoryGetter,);
    this.registerInclusionResolver('solicitudClientes', this.solicitudClientes.inclusionResolver);
    this.registroCategoria = this.createBelongsToAccessorFor('registroCategoria', registroCategoriaRepositoryGetter,);
    this.registerInclusionResolver('registroCategoria', this.registroCategoria.inclusionResolver);
  }
}
