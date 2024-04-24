import { InMemoryCarRepository } from '@/repository/in-memory/in-memory-register-car'
import { ResgisterCarUseCase } from '../register-car'

export function makeRegisterCarUseCase() {
  const inMemoryCarRepository = new InMemoryCarRepository()
  const registerCar = new ResgisterCarUseCase(inMemoryCarRepository)

  return registerCar
}
