import {Entity, model, property, hasMany} from '@loopback/repository';
import {RegistroCategoria} from './registro-categoria.model';

@model()
export class CategoriaBusqueda extends Entity {
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

  @hasMany(() => RegistroCategoria)
  registroCategorias: RegistroCategoria[];

  constructor(data?: Partial<CategoriaBusqueda>) {
    super(data);
  }
}

export interface CategoriaBusquedaRelations {
  // describe navigational properties here
}

export type CategoriaBusquedaWithRelations = CategoriaBusqueda & CategoriaBusquedaRelations;
