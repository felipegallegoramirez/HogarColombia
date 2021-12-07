import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class ActivarCuenta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  activo: boolean;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<ActivarCuenta>) {
    super(data);
  }
}

export interface ActivarCuentaRelations {
  // describe navigational properties here
}

export type ActivarCuentaWithRelations = ActivarCuenta & ActivarCuentaRelations;
