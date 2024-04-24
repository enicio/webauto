import { FastifyInstance } from 'fastify'
import { useCar } from './use-cars'
import { returnCar } from './return-car'
import { allCarsInUseCar } from './all-cars-in-use'

export async function useCarRoutes(app: FastifyInstance) {
  app.get('/use-cars', allCarsInUseCar)
  app.post('/use-cars', useCar)
  app.put('/use-cars', returnCar)
}
