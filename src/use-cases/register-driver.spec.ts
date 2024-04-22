import { describe, expect, test } from '@jest/globals'
import { InMemoryDriverRepository } from '../repository/in-memory/in-memory-register-driver'
import { ResgisterDriverUseCase } from './register-driver'

describe('Register driver', () => {
  test('Should register a driver', async () => {
    const inMemoryDriverRepository = new InMemoryDriverRepository()
    const registerDriver = new ResgisterDriverUseCase(inMemoryDriverRepository)
    const { driver } = await registerDriver.execute({
      id: '1',
      name: 'João',
    })

    expect(driver).toEqual({
      id: '1',
      name: 'João',
    })
  })
})
