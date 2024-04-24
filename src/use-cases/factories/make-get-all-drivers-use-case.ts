import { InMemoryDriverRepository } from '@/repository/in-memory/in-memory-register-driver'
import { GetAllDriverUseCase } from '../get-all-drivers'

export function makeGetAllDriversUseCase() {
  const inMemoryDriverRepository = new InMemoryDriverRepository()
  const getAllDriver = new GetAllDriverUseCase(inMemoryDriverRepository)

  return getAllDriver
}
