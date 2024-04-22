import { CarRepository } from '@/repository/car-repository'
import { DriverRepository } from '@/repository/driver-repository'
import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import type {
  UseOfCarInput,
  UseOfCarOutput,
} from '@/repository/use-of-car-repository'

export class UseOfCarUseCase {
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
    const driver = await this.driverRepository.findById(driverId)
    if (!driver) {
      throw new Error('Driver not found')
    }

    const car = await this.carRepository.findById(carId)
    if (!car) {
      throw new Error('Car not found')
    }

    const pendingCarReturn = await this.useOfCarRepository.pendigCarReturn(
      driverId,
    )
    if (pendingCarReturn) {
      throw new Error('Driver has a car in use')
    }

    const useId = await this.useOfCarRepository.create({
      id,
      carId,
      driverId,
      startDate,
      finishDate,
      reason,
    })

    return useId
  }
}
