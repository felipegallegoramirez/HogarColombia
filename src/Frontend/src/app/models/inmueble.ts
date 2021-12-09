


  export interface Inmueble{
    id: string;
    departamento: string;
    ciudad: string;
    direccion: string;
    tipoOferta: string;
    pathFotografias: Array<string>;
    caracteristicasInternas: Array<number>;
    caracteristicasExternas: Array<number>;
    asesorId: string;
    registroCategoriaId: string;

    title:string;
    description:string;
    general:Array<String>
}