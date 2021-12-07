import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class RecuperarContrasena extends Entity {
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
  correo: string;

  @property({
    type: 'boolean',
    required: true,
  })
  activo: boolean;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<RecuperarContrasena>) {
    super(data);
  }
}

export interface RecuperarContrasenaRelations {
  // describe navigational properties here
}

export type RecuperarContrasenaWithRelations = RecuperarContrasena & RecuperarContrasenaRelations;
