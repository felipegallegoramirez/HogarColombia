import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {SolicitudCliente, SolicitudClienteRelations, Inmueble, Asesor, Cliente} from '../models';
import {InmuebleRepository} from './inmueble.repository';
import {AsesorRepository} from './asesor.repository';
import {ClienteRepository} from './cliente.repository';

export class SolicitudClienteRepository extends DefaultCrudRepository<
  SolicitudCliente,
  typeof SolicitudCliente.prototype.id,
  SolicitudClienteRelations
> {

  public readonly inmueble: BelongsToAccessor<Inmueble, typeof SolicitudCliente.prototype.id>;

  public readonly asesor: BelongsToAccessor<Asesor, typeof SolicitudCliente.prototype.id>;

  public readonly cliente: BelongsToAccessor<Cliente, typeof SolicitudCliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(SolicitudCliente, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.inmueble = this.createBelongsToAccessorFor('inmueble', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
  }
}
