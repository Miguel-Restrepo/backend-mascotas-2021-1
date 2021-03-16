import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodbDs',
  connector: 'mongodb',
  url: 'mongodb+srv://Admin_Mascotas:Miguel12195@cluster0.lrgyu.mongodb.net/test',
  host: 'cluster0-shard-00-01.lrgyu.mongodb.net:27017',
  port: 3000,
  user: 'Admin_Mascotas',
  password: 'Miguel12195',
  database: 'MascotasDb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodbDs';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodbDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
