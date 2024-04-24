import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import { GetAllUseOfCarsUseCase } from '../get-all-use-of-cars'

export function makeGetAllInUseCarsUseCase() {
  const inMemoryUseOfCarRepository = new InMemoryUseOfCarRepository()
  const getAllUseOfCars = new GetAllUseOfCarsUseCase(inMemoryUseOfCarRepository)
  return getAllUseOfCars
}
