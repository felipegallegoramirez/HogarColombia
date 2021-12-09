import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {RegistroCategoria} from './registro-categoria.model';
import {SolicitudCliente} from './solicitud-cliente.model';
import {Asesor} from './asesor.model';

@model()
export class Inmueble extends Entity {
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
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;


  @property({
    type: 'string',
    required: true,
  })
  description: string;

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

  @property({
    type: 'string',
    required: true,
  })
  tipoOferta: string;

  
  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  general: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  pathFotografias: string[];

  @property({
    type: 'array',
    itemType: 'number',
    required: false,
  })
  caracteristicasInternas: number[];

  @property({
    type: 'array',
    itemType: 'number',
    required: false,
  })
  caracteristicasExternas: number[];

  @belongsTo(() => RegistroCategoria)
  registroCategoriaId: string;

  @hasMany(() => SolicitudCliente)
  solicitudClientes: SolicitudCliente[];

  @belongsTo(() => Asesor)
  asesorId: string;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
