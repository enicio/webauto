import { InMemoryCarRepository } from '@/repository/in-memory/in-memory-register-car'
import { InMemoryDriverRepository } from '@/repository/in-memory/in-memory-register-driver'
import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import { UseOfCarUseCase } from '../use-of-cars'

export function makeUseOfCarUseCase() {
  const inMemoryDriverRepository = new InMemoryDriverRepository()
  const inMemoryCarRepository = new InMemoryCarRepository()
  const inMemoryUseOfCarRepository = new InMemoryUseOfCarRepository()

  const useOfCar = new UseOfCarUseCase(
    inMemoryCarRepository,
    inMemoryDriverRepository,
    inMemoryUseOfCarRepository,
  )
  return useOfCar
}
