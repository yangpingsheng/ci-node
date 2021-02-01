import request from 'supertest'
import app from '../../src/app'

describe('math', () => {
  describe('add', () => {
    test('3', async () => {
      await request(app).get('/add?list=3').expect(400)
    })
    test('[3,NaN]', async () => {
      await request(app).get('/add?list[]=3&list[]=NaN').expect(400)
    })
    test('[3,4]', async () => {
      await request(app)
        .get('/add?list[]=3&list[]=4')
        .expect('Content-Type', /text/)
        .expect(200)
        .expect('7')
    })
  })
})
