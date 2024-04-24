import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import { ReturnOfCarUseCase } from '../return-the-cars'

export function makeReturnOfCarUseCase() {
  const inMemoryUseOfCarRepository = new InMemoryUseOfCarRepository()
  const returnOfCar = new ReturnOfCarUseCase(inMemoryUseOfCarRepository)

  return returnOfCar
}
