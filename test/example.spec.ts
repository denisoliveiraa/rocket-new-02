 import {expect, test} from 'vitest'
 import request from 'supertest'
 import {app} from '../src/app'

 test('O usuário consegue criar uma nova transação', async () => {
  await request(app.server)

  .post('/transactions')
  .send({
    title: "Trabalho outros",
    amount: 6000,
    type: "debit"
  })
  .expect(201)
 })