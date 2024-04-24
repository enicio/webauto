import { InMemoryDriverRepository } from '@/repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from '../register-driver'

export function makeRegisterDriverUseCase() {
  const inMemoryDriverRepository = new InMemoryDriverRepository()
  const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)

  return registerDriver
}
