import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  HttpErrors, param, post,
  Request,
  requestBody,
  Response,
  RestBindings,
  get,oas
} from '@loopback/rest';
import multer from 'multer';
import path from 'path';
import {Keys as llaves} from '../config/keys';
import fs from 'fs';
import {promisify} from 'util';
const readdir = promisify(fs.readdir);

export class SubirImagenesController {
  constructor(
  ) { }



  /**
   *
   * @param response
   * @param request
   */
   @post('/CargarImagen', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de documentos de la persona.',
      },
    },
  })

  async Imagen(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
  ): Promise<object | false> {
    const rutaDocumentoImagen = path.join(__dirname, llaves.carpetaImagen);
    let res = await this.StoreFileToPath(rutaDocumentoImagen, llaves.nombreCampoImagen, request, response, llaves.extensionesPermitidasIMG);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        return {filename: nombre_archivo};
      }
    }
    return res;
  }


  /**
   *
   * @param response
   * @param request
   */
  @post('/CargarDocumentoPersona', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga de documentos de la persona.',
      },
    },
  })

  async DocumentosPersona(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody.file() request: Request,
  ): Promise<object | false> {
    const rutaDocumentoPersona = path.join(__dirname, llaves.carpetaDocumento);
    let res = await this.StoreFileToPath(rutaDocumentoPersona, llaves.nombreCampoDocumentoPersona, request, response, llaves.extensionesPermitidasDOC);
    if (res) {
      const nombre_archivo = response.req?.file?.filename;
      if (nombre_archivo) {
        return {filename: nombre_archivo};
      }
    }
    return res;
  }


  /**
   * Return a config for multer storage
   * @param path
   */

  private GetMulterStorageConfig(path: string) {
    var filename: string = '';
    const storage = multer.diskStorage({
      destination: function (req: any, file: any, cb: any) {
        cb(null, path)
      },
      filename: function (req: any, file: any, cb: any) {
        filename = `${Date.now()}-${file.originalname}`
        cb(null, filename);
      }
    });
    return storage;
  }

  /**
   * store the file in a specific path
   * @param storePath
   * @param request
   * @param response
   */

   private StoreFileToPath(storePath: string, fieldname: string, request: Request, response: Response, acceptedExt: string[]): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      const storage = this.GetMulterStorageConfig(storePath);
      const upload = multer({
        storage: storage,
        fileFilter: function (req: any, file: any, callback: any) {
          var ext = path.extname(file.originalname).toUpperCase();
          if (acceptedExt.includes(ext)) {
            return callback(null, true);
          }
          return callback(new HttpErrors[400]('El formato del archivo no es permitido.'));
        },
        limits: {
          fileSize: llaves.tamMaxImagenVehiculo
        }
      },
      ).single(fieldname);
      upload(request, response, (err: any) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }


    /**
   *
   * @param type
   * @param recordId
   * @param response
   */
     @get('/archivo/{type}/{filename}')
     @oas.response.file()
     async descargarArchivo(
       @param.path.number('type') type: number,
       @param.path.string('filename') filename: string,
       @inject(RestBindings.Http.RESPONSE) response: Response,
     ) {
       const rutaCarpeta = this.ObtenerRutaDeCarpetaPorTipo(type);
       const archivo = this.ValidarNombreArchivo(rutaCarpeta, filename);
       response.download(archivo, rutaCarpeta);
       return response;
     }
   
     /**
      * Get the folder when files are uploaded by type
      * @param type
      */
     private ObtenerRutaDeCarpetaPorTipo(type: number) {
       let ruta = '';
       switch (type) {
         // mascota
         case 1:
           ruta = path.join(__dirname, llaves.carpetaImagen);
           break;
   
         case 2:
           ruta = path.join(__dirname, llaves.carpetaDocumento);
       }
       return ruta;
     }

       /**
   * Validate file names to prevent them goes beyond the designated directory
   * @param fileName - File name
   */
  private ValidarNombreArchivo(archivo: string, folder: string) {
    const resolved = path.resolve(archivo, folder);
    if (resolved.startsWith(archivo)) return resolved;
    // The resolved file is outside sandbox
    throw new HttpErrors[400](`La ruta del archivo es inválida: ${folder}`);
  }

}




