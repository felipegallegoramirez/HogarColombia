import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Inmueble} from './inmueble.model';
import {Asesor} from './asesor.model';
import {Cliente} from './cliente.model';

@model()
export class SolicitudCliente extends Entity {
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
  tipoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  @property({
    type: 'string',
    required: true,
  })
  pathContrato: string;

  @property({
    type: 'string',
    required: true,
  })
  pathContratoFirmado: string;

  @belongsTo(() => Inmueble)
  inmuebleId: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<SolicitudCliente>) {
    super(data);
  }
}

export interface SolicitudClienteRelations {
  // describe navigational properties here
}

export type SolicitudClienteWithRelations = SolicitudCliente & SolicitudClienteRelations;
