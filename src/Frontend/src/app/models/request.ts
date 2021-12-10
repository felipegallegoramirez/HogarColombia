export interface request{
  id: string;

  tipoSolicitud: string;
  
  estadoSolicitud: string;

  comentarios: string;

  pathContrato: string;

  pathContratoFirmado: string;

  inmuebleId: string;

  asesorId: string;

  clienteId: string;
}