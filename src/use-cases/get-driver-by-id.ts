import { DriverOutput, DriverRepository } from '@/repository/driver-repository'

export class GetDriverByIdUseCase {
  constructor(private driverRepository: DriverRepository) {}

  async execute(id: string): Promise<DriverOutput> {
    const driver = await this.driverRepository.findById(id)
    if (!driver) {
      throw new Error('Driver not found')
    }
    return driver
  }
}
