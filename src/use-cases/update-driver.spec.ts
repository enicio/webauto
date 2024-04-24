import { describe, expect, test } from '@jest/globals'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from './register-driver'
import { UpdateDriverByIdUseCase } from './update-driver'

describe('Register driver', () => {
  test('Should register a driver', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    const updateDriver = new UpdateDriverByIdUseCase(inMemoryDriverRepository)

    await updateDriver.execute({
      id: '1',
      name: 'Mathilda',
    })

    const driver = await inMemoryDriverRepository.findById('1')

    expect(driver).toEqual({
      id: '1',
      name: 'Mathilda',
    })
  })
})
