import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Vacunas extends Model {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vacunas>) {
    super(data);
  }
}

export interface VacunasRelations {
  // describe navigational properties here
}

export type VacunasWithRelations = Vacunas & VacunasRelations;
