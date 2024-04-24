import {
  UseCarRepository,
  UseOfCarInput,
  UseOfCarOutput,
} from '../use-of-car-repository'
import { v4 as uuidv4 } from 'uuid'

let inUseCar: UseOfCarInput[] = []
export class InMemoryUseOfCarRepository implements UseCarRepository {
  async findById(id: string): Promise<UseOfCarOutput | null> {
    const useCar = inUseCar.find((use) => use.id === id)
    if (!useCar) {
      return null
    }
    return useCar as UseOfCarOutput
  }

  async getAll(): Promise<UseOfCarOutput[]> {
    return inUseCar as UseOfCarOutput[]
  }

  async create({
    id = uuidv4(),
    carId,
    driverId,
    startDate,
    finishDate,
    reason,
  }: UseOfCarInput): Promise<UseOfCarOutput> {
    inUseCar.push({
      id,
      carId,
      driverId,
      startDate,
      finishDate,
      reason,
    })

    return {
      id,
      carId,
      driverId,
      startDate,
      finishDate,
      reason,
    }
  }

  async pendigCarReturn(driverId: string): Promise<UseOfCarOutput | null> {
    const isPendingCar = inUseCar.find(
      (use) => use.driverId === driverId && !use.finishDate,
    )

    if (!isPendingCar) {
      return null
    }

    return isPendingCar as UseOfCarOutput
  }

  async returnCar(id: string, finishDate: string): Promise<UseOfCarOutput> {
    const carToRetun = inUseCar.find((use) => use.id === id)
    if (!carToRetun) {
      throw new Error('Use not found')
    }
    carToRetun.finishDate = finishDate || new Date().toDateString()
    return carToRetun as UseOfCarOutput
  }

  async cleanDB(): Promise<void> {
    inUseCar = []
  }
}
