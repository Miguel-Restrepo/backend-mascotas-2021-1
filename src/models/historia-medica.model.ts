import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HistoriaMedica extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  especialidad?: string;

  @property({
    type: 'string',
  })
  diagnostico?: string;

  @property({
    type: 'string',
  })
  recomendaciones?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistoriaMedica>) {
    super(data);
  }
}

export interface HistoriaMedicaRelations {
  // describe navigational properties here
}

export type HistoriaMedicaWithRelations = HistoriaMedica & HistoriaMedicaRelations;
