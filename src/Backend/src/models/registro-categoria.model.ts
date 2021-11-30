import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {CategoriaBusqueda} from './categoria-busqueda.model';
import {Inmueble} from './inmueble.model';

@model()
export class RegistroCategoria extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeParticipacion: number;

  @belongsTo(() => CategoriaBusqueda)
  categoriaBusquedaId: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<RegistroCategoria>) {
    super(data);
  }
}

export interface RegistroCategoriaRelations {
  // describe navigational properties here
}

export type RegistroCategoriaWithRelations = RegistroCategoria & RegistroCategoriaRelations;
