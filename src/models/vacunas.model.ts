import {Entity, model, property} from '@loopback/repository';

@model()
export class Vacunas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Vacunas>) {
    super(data);
  }
}

export interface VacunasRelations {
  // describe navigational properties here
}

export type VacunasWithRelations = Vacunas & VacunasRelations;
