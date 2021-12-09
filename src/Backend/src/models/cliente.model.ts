import {Entity, model, property, hasMany} from '@loopback/repository';
import {SolicitudCliente} from './solicitud-cliente.model';
import {RecuperarContrasena} from './recuperar-contrasena.model';
import {ActivarCuenta} from './activar-cuenta.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;
  
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  @property({
    type: 'boolean',
    required: true,
  })
  activo: boolean;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @hasMany(() => SolicitudCliente)
  solicitudClientes: SolicitudCliente[];

  @hasMany(() => RecuperarContrasena)
  recuperarContrasenas: RecuperarContrasena[];

  @hasMany(() => ActivarCuenta)
  activarCuentas: ActivarCuenta[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
