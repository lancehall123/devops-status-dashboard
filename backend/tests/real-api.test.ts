import request from 'supertest'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080'

describe('Real /builds endpoint', () => {
  it('should return a list of builds from the live API', async () => {
    const response = await request(API_BASE_URL).get('/builds')

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)

    if (response.body.length > 0) {
      const build = response.body[0]
      expect(build).toHaveProperty('id')
      expect(build).toHaveProperty('status')
      expect(build).toHaveProperty('date')
      expect(build).toHaveProperty('url')
    }
  })
})
