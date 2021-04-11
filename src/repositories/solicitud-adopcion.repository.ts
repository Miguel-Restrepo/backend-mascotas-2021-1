
import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {EstadoSolicitud, Mascota, Persona, SolicitudAdopcion, SolicitudAdopcionRelations} from '../models';
import {EstadoSolicitudRepository} from './estado-solicitud.repository';
import {MascotaRepository} from './mascota.repository';
import {PersonaRepository} from './persona.repository';

export class SolicitudAdopcionRepository extends DefaultCrudRepository<
  SolicitudAdopcion,
  typeof SolicitudAdopcion.prototype.id,
  SolicitudAdopcionRelations
> {

  public readonly mascota: BelongsToAccessor<Mascota, typeof SolicitudAdopcion.prototype.id>;

  public readonly persona: BelongsToAccessor<Persona, typeof SolicitudAdopcion.prototype.id>;

  public readonly estadoSolicitud: BelongsToAccessor<EstadoSolicitud, typeof SolicitudAdopcion.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>, @repository.getter('EstadoSolicitudRepository') protected estadoSolicitudRepositoryGetter: Getter<EstadoSolicitudRepository>,
  ) {
    super(SolicitudAdopcion, dataSource);
    this.estadoSolicitud = this.createBelongsToAccessorFor('estadoSolicitud', estadoSolicitudRepositoryGetter,);
    this.registerInclusionResolver('estadoSolicitud', this.estadoSolicitud.inclusionResolver);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    this.mascota = this.createBelongsToAccessorFor('mascota', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascota', this.mascota.inclusionResolver);
  }
}
