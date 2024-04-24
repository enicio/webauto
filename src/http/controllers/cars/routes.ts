import { FastifyInstance } from 'fastify'
import { register } from './register'

export async function carsRoutes(app: FastifyInstance) {
  app.post('/cars', register)
}
