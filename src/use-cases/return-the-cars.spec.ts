import { InMemoryCarRepository } from '../repository/in-memory/in-memory-register-car'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { InMemoryUseOfCarRepository } from '../repository/in-memory/in-memory-use-car'
import { describe, expect, test } from '@jest/globals'
import { ResgisterCarUseCase } from './register-car'
import { ResgisterDriverUseCase } from './register-driver'
import { UseOfCarUseCase } from './use-of-cars'
import { ReturnOfCarUseCase } from './return-the-cars'

describe('Return of the car', () => {
  test('Should attribute a car to a driver e return it to the inventory', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const inMemoryCarRepository = new InMemoryCarRepository()
    const inMemoryUseOfCarRepository = new InMemoryUseOfCarRepository()

    const registerCar = new ResgisterCarUseCase(inMemoryCarRepository)
    await registerCar.execute({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    const useOfCar = new UseOfCarUseCase(
      inMemoryCarRepository,
      inMemoryDriverRepository,
      inMemoryUseOfCarRepository,
    )

    const carUsed = await useOfCar.execute({
      id: '1',
      carId: '1',
      driverId: '1',
      startDate: new Date().toDateString(),
      reason: 'teste',
    })

    const returnOfCar = new ReturnOfCarUseCase(inMemoryUseOfCarRepository)

    returnOfCar.execute({
      driverId: carUsed.driverId,
      finishDate: new Date().toDateString(),
    })

    const userOfCar_2 = await useOfCar.execute({
      id: '1',
      carId: '1',
      driverId: '1',
      startDate: new Date().toDateString(),
      reason: 'teste',
    })

    expect(userOfCar_2.finishDate).toEqual(undefined)
  })
})
