import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ActivarCuenta, ActivarCuentaRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class ActivarCuentaRepository extends DefaultCrudRepository<
  ActivarCuenta,
  typeof ActivarCuenta.prototype.id,
  ActivarCuentaRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof ActivarCuenta.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(ActivarCuenta, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
