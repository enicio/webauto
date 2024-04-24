import { FastifyInstance } from 'fastify'
import { register } from './register'
import { getAllDrivers } from './get-all-drivers'
import { getDriverById } from './get-drivers-by-id'
import { updateDriver } from './update-driver'

export async function driversRoutes(app: FastifyInstance) {
  app.get('/drivers', getAllDrivers)
  app.get('/drivers/:id', getDriverById)

  app.put('/drivers', updateDriver)
  app.post('/drivers', register)
}
