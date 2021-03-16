import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Vacunas, VacunasRelations} from '../models';

export class VacunasRepository extends DefaultCrudRepository<
  Vacunas,
  typeof Vacunas.prototype.id,
  VacunasRelations
> {
  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource,
  ) {
    super(Vacunas, dataSource);
  }
}
