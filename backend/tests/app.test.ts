import request from 'supertest'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/builds', (req, res) => {
  res.json([{ id: 123, status: 'success', date: 'today', url: 'http://test' }])
})

describe('GET /builds', () => {
  it('should return a 200 with JSON response', async () => {
    const res = await request(app).get('/builds')
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0]).toHaveProperty('id')
  })
})
