import { describe, expect, test, beforeEach } from '@jest/globals'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from './register-driver'
import { DeleteDriverByIdUseCase } from './delete-driver'
import { GetAllDriverUseCase } from './get-all-drivers'

describe('Delete driver', () => {
  beforeEach(() => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    inMemoryDriverRepository.cleanDB()
  })
  test('Should delete a driver', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    const getAllDrivers = new GetAllDriverUseCase(inMemoryDriverRepository)
    await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    await registerDriver.execute({
      id: '2',
      name: 'Leena',
    })
    const allDrivers_1 = await getAllDrivers.execute()
    expect(allDrivers_1).toHaveLength(2)

    const getAllDriverUseCase = new DeleteDriverByIdUseCase(
      inMemoryDriverRepository,
    )

    await getAllDriverUseCase.execute('1')

    const allDrivers_2 = await getAllDrivers.execute()

    expect(allDrivers_2).toHaveLength(1)
  })
})
