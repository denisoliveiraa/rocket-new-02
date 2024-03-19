import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { transactionsRoutes } from './routes/transactions'
import cookie  from '@fastify/cookie'

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {prefix: "transactions",})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is runnig')
  })
