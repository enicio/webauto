import { InMemoryDriverRepository } from '@/repository/in-memory/in-memory-register-driver'
import { UpdateDriverByIdUseCase } from '../update-driver'

export function makeUpdateUseCase() {
  const inMemoryUseOfCarRepository = new InMemoryDriverRepository()
  const returnOfCar = new UpdateDriverByIdUseCase(inMemoryUseOfCarRepository)

  return returnOfCar
}
