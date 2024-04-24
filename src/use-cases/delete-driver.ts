import { DriverRepository } from '@/repository/driver-repository'

export class DeleteDriverByIdUseCase {
  constructor(private driverRepository: DriverRepository) {}

  async execute(id: string): Promise<void> {
    await this.driverRepository.delete(id)
  }
}
