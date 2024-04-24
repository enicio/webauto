import fastify from 'fastify'
import { driversRoutes } from './http/controllers/drivers/routes'
import { carsRoutes } from './http/controllers/cars/routes'
import { useCarRoutes } from './http/controllers/use-cars/routes'
import { ZodError } from 'zod'

export const app = fastify()

app.register(driversRoutes)
app.register(carsRoutes)
app.register(useCarRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
