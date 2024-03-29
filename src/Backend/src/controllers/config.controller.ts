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
import {Config} from '../models';
import {ConfigRepository} from '../repositories';

export class ConfigController {
  constructor(
    @repository(ConfigRepository)
    public configRepository : ConfigRepository,
  ) {}

  @post('/configs')
  @response(200, {
    description: 'Config model instance',
    content: {'application/json': {schema: getModelSchemaRef(Config)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Config, {
            title: 'NewConfig',
            exclude: ['id'],
          }),
        },
      },
    })
    config: Omit<Config, 'id'>,
  ): Promise<Config> {
    return this.configRepository.create(config);
  }

  @get('/configs/count')
  @response(200, {
    description: 'Config model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Config) where?: Where<Config>,
  ): Promise<Count> {
    return this.configRepository.count(where);
  }

  @get('/configs')
  @response(200, {
    description: 'Array of Config model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Config, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Config) filter?: Filter<Config>,
  ): Promise<Config[]> {
    return this.configRepository.find(filter);
  }

  @patch('/configs')
  @response(200, {
    description: 'Config PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Config, {partial: true}),
        },
      },
    })
    config: Config,
    @param.where(Config) where?: Where<Config>,
  ): Promise<Count> {
    return this.configRepository.updateAll(config, where);
  }

  @get('/configs/{id}')
  @response(200, {
    description: 'Config model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Config, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Config, {exclude: 'where'}) filter?: FilterExcludingWhere<Config>
  ): Promise<Config> {
    return this.configRepository.findById(id, filter);
  }

  @patch('/configs/{id}')
  @response(204, {
    description: 'Config PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Config, {partial: true}),
        },
      },
    })
    config: Config,
  ): Promise<void> {
    await this.configRepository.updateById(id, config);
  }

  @put('/configs/{id}')
  @response(204, {
    description: 'Config PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() config: Config,
  ): Promise<void> {
    await this.configRepository.replaceById(id, config);
  }

  @del('/configs/{id}')
  @response(204, {
    description: 'Config DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.configRepository.deleteById(id);
  }
}
