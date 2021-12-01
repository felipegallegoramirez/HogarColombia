import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ActivarCuenta} from '../models';
import {ActivarCuentaRepository} from '../repositories';

export class ActivarCuentaController {
  constructor(
    @repository(ActivarCuentaRepository)
    public activarCuentaRepository : ActivarCuentaRepository,
  ) {}

  @post('/activar-cuentas')
  @response(200, {
    description: 'ActivarCuenta model instance',
    content: {'application/json': {schema: getModelSchemaRef(ActivarCuenta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivarCuenta, {
            title: 'NewActivarCuenta',
            exclude: ['id'],
          }),
        },
      },
    })
    activarCuenta: Omit<ActivarCuenta, 'id'>,
  ): Promise<ActivarCuenta> {
    return this.activarCuentaRepository.create(activarCuenta);
  }

  @get('/activar-cuentas/count')
  @response(200, {
    description: 'ActivarCuenta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ActivarCuenta) where?: Where<ActivarCuenta>,
  ): Promise<Count> {
    return this.activarCuentaRepository.count(where);
  }

  @get('/activar-cuentas')
  @response(200, {
    description: 'Array of ActivarCuenta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ActivarCuenta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ActivarCuenta) filter?: Filter<ActivarCuenta>,
  ): Promise<ActivarCuenta[]> {
    return this.activarCuentaRepository.find(filter);
  }

  @patch('/activar-cuentas')
  @response(200, {
    description: 'ActivarCuenta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivarCuenta, {partial: true}),
        },
      },
    })
    activarCuenta: ActivarCuenta,
    @param.where(ActivarCuenta) where?: Where<ActivarCuenta>,
  ): Promise<Count> {
    return this.activarCuentaRepository.updateAll(activarCuenta, where);
  }

  @get('/activar-cuentas/{id}')
  @response(200, {
    description: 'ActivarCuenta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ActivarCuenta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ActivarCuenta, {exclude: 'where'}) filter?: FilterExcludingWhere<ActivarCuenta>
  ): Promise<ActivarCuenta> {
    return this.activarCuentaRepository.findById(id, filter);
  }

  @patch('/activar-cuentas/{id}')
  @response(204, {
    description: 'ActivarCuenta PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivarCuenta, {partial: true}),
        },
      },
    })
    activarCuenta: ActivarCuenta,
  ): Promise<void> {
    await this.activarCuentaRepository.updateById(id, activarCuenta);
  }

  @put('/activar-cuentas/{id}')
  @response(204, {
    description: 'ActivarCuenta PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() activarCuenta: ActivarCuenta,
  ): Promise<void> {
    await this.activarCuentaRepository.replaceById(id, activarCuenta);
  }

  @del('/activar-cuentas/{id}')
  @response(204, {
    description: 'ActivarCuenta DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.activarCuentaRepository.deleteById(id);
  }
}
