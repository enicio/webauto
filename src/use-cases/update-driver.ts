import { DriverInput, DriverRepository } from '@/repository/driver-repository'

export class UpdateDriverByIdUseCase {
  constructor(private driverRepository: DriverRepository) {}

  async execute(data: DriverInput): Promise<void> {
    await this.driverRepository.update(data)
  }
}
