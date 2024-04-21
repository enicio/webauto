import {
  DriverInput,
  DriverOutput,
  DriverRepository,
} from '../driver-repository'

export class InMemoryDriverRepository implements DriverRepository {
  public drivers: DriverOutput[] = []
  async findById(id: string): Promise<DriverOutput | null> {
    const driver = this.drivers.find((driver) => driver.id === id)
    if (!driver) {
      return null
    }
    return driver
  }

  async create({ id, name }: DriverInput) {
    const driver = { id: id || Math.random().toString(), name }
    this.drivers.push(driver)
    return driver
  }

  async getAll() {
    return this.drivers
  }
}
