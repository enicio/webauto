import { CarRepository } from '@/repository/car-repository'

interface RegisterCar {
  id?: string
  brand: string
  color: string
  plate: string
}

interface RegisterCarResponse {
  car: {
    id: string
    brand: string
    color: string
    plate: string
  }
}

export class ResgisterCarUseCase {
  constructor(private carRepository: CarRepository) {}

  async execute({
    id,
    brand,
    color,
    plate,
  }: RegisterCar): Promise<RegisterCarResponse> {
    const car = await this.carRepository.create({ id, brand, color, plate })

    return { car }
  }
}
