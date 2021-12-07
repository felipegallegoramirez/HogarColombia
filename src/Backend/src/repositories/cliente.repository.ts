import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, SolicitudCliente, RecuperarContrasena, ActivarCuenta} from '../models';
import {SolicitudClienteRepository} from './solicitud-cliente.repository';
import {RecuperarContrasenaRepository} from './recuperar-contrasena.repository';
import {ActivarCuentaRepository} from './activar-cuenta.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly solicitudClientes: HasManyRepositoryFactory<SolicitudCliente, typeof Cliente.prototype.id>;

  public readonly recuperarContrasenas: HasManyRepositoryFactory<RecuperarContrasena, typeof Cliente.prototype.id>;

  public readonly activarCuentas: HasManyRepositoryFactory<ActivarCuenta, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudClienteRepository') protected solicitudClienteRepositoryGetter: Getter<SolicitudClienteRepository>, @repository.getter('RecuperarContrasenaRepository') protected recuperarContrasenaRepositoryGetter: Getter<RecuperarContrasenaRepository>, @repository.getter('ActivarCuentaRepository') protected activarCuentaRepositoryGetter: Getter<ActivarCuentaRepository>,
  ) {
    super(Cliente, dataSource);
    this.activarCuentas = this.createHasManyRepositoryFactoryFor('activarCuentas', activarCuentaRepositoryGetter,);
    this.registerInclusionResolver('activarCuentas', this.activarCuentas.inclusionResolver);
    this.recuperarContrasenas = this.createHasManyRepositoryFactoryFor('recuperarContrasenas', recuperarContrasenaRepositoryGetter,);
    this.registerInclusionResolver('recuperarContrasenas', this.recuperarContrasenas.inclusionResolver);
    this.solicitudClientes = this.createHasManyRepositoryFactoryFor('solicitudClientes', solicitudClienteRepositoryGetter,);
    this.registerInclusionResolver('solicitudClientes', this.solicitudClientes.inclusionResolver);
  }
}
