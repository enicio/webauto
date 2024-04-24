import { describe, expect, test, beforeEach } from '@jest/globals'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from './register-driver'
import { GetAllDriverUseCase } from './get-all-drivers'

describe('Register driver', () => {
  beforeEach(() => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    inMemoryDriverRepository.cleanDB()
  })
  test('Should return all drivers', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    await registerDriver.execute({
      id: '2',
      name: 'Leena',
    })

    const getAllDriverUseCase = new GetAllDriverUseCase(
      inMemoryDriverRepository,
    )

    const drivers = await getAllDriverUseCase.execute()

    expect(drivers.length).toEqual(2)
  })

  test('Should return a driver by name', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    await registerDriver.execute({
      id: '2',
      name: 'Leena',
    })

    const getAllDriverUseCase = new GetAllDriverUseCase(
      inMemoryDriverRepository,
    )

    const drivers = await getAllDriverUseCase.execute('Leena')

    expect(drivers.length).toEqual(1)
    expect(drivers[0].name).toEqual('Leena')
  })
})
