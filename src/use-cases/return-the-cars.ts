import { CarRepository } from '@/repository/car-repository'
import { DriverRepository } from '@/repository/driver-repository'
import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import type {
  UseOfCarInput,
  UseOfCarOutput,
} from '@/repository/use-of-car-repository'

export class ReturnOfCarUseCase {
  constructor(
    private carRepository: CarRepository,
    private driverRepository: DriverRepository,
    private useOfCarRepository: InMemoryUseOfCarRepository,
  ) {}

  async execute({
    id,
    carId,
    driverId,
    startDate,
    finishDate,
    reason,
  }: UseOfCarInput): Promise<UseOfCarOutput> {
    const pendingCarReturn = await this.useOfCarRepository.pendigCarReturn(
      driverId,
    )
    if (!pendingCarReturn) {
      throw new Error('Driver has a car in use')
    }

    const carToReturn = await this.useOfCarRepository.returnCar(
      pendingCarReturn.id,
    )

    return carToReturn
  }
}
