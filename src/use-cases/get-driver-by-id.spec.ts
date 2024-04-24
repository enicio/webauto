import { describe, expect, test, beforeEach } from '@jest/globals'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from './register-driver'
import { GetDriverByIdUseCase } from './get-driver-by-id'

describe('Register driver', () => {
  beforeEach(() => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    inMemoryDriverRepository.cleanDB()
  })
  test('Should return a driver by id', async () => {
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

    const getAllDriverUseCase = new GetDriverByIdUseCase(
      inMemoryDriverRepository,
    )

    const driver = await getAllDriverUseCase.execute('1')

    expect(driver.name).toEqual('João')
  })
})
