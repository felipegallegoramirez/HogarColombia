import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RecuperarContrasena, RecuperarContrasenaRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class RecuperarContrasenaRepository extends DefaultCrudRepository<
  RecuperarContrasena,
  typeof RecuperarContrasena.prototype.id,
  RecuperarContrasenaRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof RecuperarContrasena.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(RecuperarContrasena, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
