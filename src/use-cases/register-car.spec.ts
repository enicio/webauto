import { describe, expect, test } from '@jest/globals'
import { ResgisterCarUseCase } from './register-car'
import { InMemoryCarRepository } from '../repository/in-memory/in-memory-register-car'

describe('Register Car', () => {
  test('Should register a car', async () => {
    const inMemoryCarRepository = new InMemoryCarRepository()
    const registerCar = new ResgisterCarUseCase(inMemoryCarRepository)
    const { car } = await registerCar.execute({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    expect(car).toEqual({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })
  })

  test('Should register many cars and all them on response', async () => {
    const inMemoryCarRepository = new InMemoryCarRepository()
    const registerCar = new ResgisterCarUseCase(inMemoryCarRepository)
    await registerCar.execute({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    await registerCar.execute({
      id: '2',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    await registerCar.execute({
      id: '3',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    const allCars = await inMemoryCarRepository.getAll()

    expect(allCars).toHaveLength(3)
  })

  test('Should register a car without id', async () => {
    const inMemoryCarRepository = new InMemoryCarRepository()
    const registerCar = new ResgisterCarUseCase(inMemoryCarRepository)
    const { car } = await registerCar.execute({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })

    const carFound = await inMemoryCarRepository.findById(car.id)

    expect(carFound).toEqual({
      id: '1',
      brand: 'VW',
      color: 'branca',
      plate: 'eee-0203',
    })
  })
})
