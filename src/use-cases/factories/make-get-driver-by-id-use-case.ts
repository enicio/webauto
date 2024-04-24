import { InMemoryDriverRepository } from '@/repository/in-memory/in-memory-register-driver'
import { GetDriverByIdUseCase } from '../get-driver-by-id'

export function makeGetDriverByIdUseCase() {
  const inMemoryDriverRepository = new InMemoryDriverRepository()
  const driverById = new GetDriverByIdUseCase(inMemoryDriverRepository)

  return driverById
}
