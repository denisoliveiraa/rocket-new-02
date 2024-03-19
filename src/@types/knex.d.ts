import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface tables {
    transactions: string
  }
}