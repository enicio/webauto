import { DriverOutput, DriverRepository } from '@/repository/driver-repository'

export class GetAllDriverUseCase {
  constructor(private driverRepository: DriverRepository) {}

  async execute(name?: string): Promise<DriverOutput[]> {
    const driver = await this.driverRepository.getAll(name ?? '')
    return driver
  }
}
