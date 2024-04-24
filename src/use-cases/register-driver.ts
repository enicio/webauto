import { DriverRepository } from '@/repository/driver-repository'

interface RegisterDriver {
  id?: string
  name: string
}

interface RegisterDriverResponse {
  driver: {
    id: string
    name: string
  }
}

export class ResgisterDriverUseCase {
  constructor(private driverRepository: DriverRepository) {}

  async execute({ id, name }: RegisterDriver): Promise<RegisterDriverResponse> {
    const driver = await this.driverRepository.create({ id, name })
    return { driver }
  }
}
