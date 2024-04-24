import { InMemoryCarRepository } from '../repository/in-memory/in-memory-register-car'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { InMemoryUseOfCarRepository } from '../repository/in-memory/in-memory-use-car'
import { describe, expect, test } from '@jest/globals'
import { ResgisterCarUseCase } from './register-car'
import { ResgisterDriverUseCase } from './register-driver'
import { UseOfCarUseCase } from './use-of-cars'

import { GetAllUseOfCarsUseCase } from './get-all-use-of-cars'

describe('Get all use of car registred', () => {
  test('Should register a car to a driver', async () => {
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

    await useOfCar.execute({
      id: '1',
      carId: '1',
      driverId: '1',
      startDate: new Date().toDateString(),
      finishDate: new Date().toDateString(),
      reason: 'teste',
    })

    const getAllUseOfCars = new GetAllUseOfCarsUseCase(
      inMemoryUseOfCarRepository,
    )

    const carInUse = await getAllUseOfCars.execute()

    expect(carInUse.length).toEqual(1)
    expect(carInUse[0].id).toEqual('1')
    expect(carInUse[0].carId).toEqual('1')
    expect(carInUse[0].reason).toEqual('teste')
  })
})
