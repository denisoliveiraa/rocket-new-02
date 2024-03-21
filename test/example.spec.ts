 import {beforeAll, expect, it, describe} from 'vitest'
 import request from 'supertest'
 import {app} from '../src/app'


 describe('Transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
   })
  
   it('O usuário consegue criar uma nova transação', async () => {
    await request(app.server) // server é uma operação do proprio nodejs vinda de http:node como foi explicado nas primeiras aulas
  
    .post('/transactions')
    .send({
      title: "Trabalho outros",
      amount: 6000,
      type: "debit"
    })
    .expect(201)
   })

   it('Should be able to create a new transactions', async () => {
    const createTransactionResponse = await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transaction',
      amount: 5000,
      type: 'credit'
    })

    const cookies = createTransactionResponse.get('Set-Cookie')

    await request(app.server)
    .get('/transactions')
    .set('Cookie', cookies)
    .expect(200)
   })

 })
 

 