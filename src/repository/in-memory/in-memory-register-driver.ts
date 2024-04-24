import {
  DriverInput,
  DriverOutput,
  DriverRepository,
} from '../driver-repository'
import { v4 as uuidv4 } from 'uuid'

let drivers: DriverOutput[] = []
export class InMemoryDriverRepository implements DriverRepository {
  async delete(id: string): Promise<void> {
    drivers = drivers.filter((driver) => driver.id !== id)
  }

  async findById(id: string): Promise<DriverOutput | null> {
    const driver = drivers.find((driver) => driver.id === id)
    if (!driver) {
      return null
    }
    return driver
  }

  async create({ id, name }: DriverInput) {
    const driver = { id: id || uuidv4(), name }
    drivers.push(driver)
    return driver
  }

  async update(data: DriverInput) {
    const driver = drivers.find((driver) => driver.id === data.id)
    if (!driver) {
      throw new Error('Driver not found')
    }
    driver.name = data.name
    return driver
  }

  async getAll(name: string) {
    if (name) {
      return drivers.filter((driver) => driver.name === name)
    }
    return drivers
  }

  async cleanDB() {
    drivers = []
  }
}
