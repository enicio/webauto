import {
  UseCarRepository,
  UseOfCarInput,
  UseOfCarOutput,
} from '../use-of-car-repository'

export class InMemoryUseOfCarRepository implements UseCarRepository {
  public inUseCar: UseOfCarInput[] = []
  async findById(id: string): Promise<UseOfCarOutput | null> {
    const useCar = this.inUseCar.find((use) => use.id === id)
    if (!useCar) {
      return null
    }
    return useCar
  }

  getAll(): Promise<UseOfCarOutput[]> {
    throw new Error('Method not implemented.')
  }

  async create({
    id = Math.random().toString(),
    carId,
    driverId,
    startDate,
    finishDate,
    reason,
  }: UseOfCarInput): Promise<UseOfCarOutput> {
    this.inUseCar.push({
      id: id || Math.random().toString(),
      carId,
      driverId,
      startDate,
      finishDate,
      reason,
    })

    console.log('Carros em uso', this.inUseCar)

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
    const isPendingCar = this.inUseCar.find(
      (use) => use.driverId === driverId && !use.finishDate,
    )

    if (!isPendingCar) {
      return null
    }
    console.log('Carro em uso - inside pedingReturn', isPendingCar)
    return isPendingCar
  }

  async returnCar(id: string | number): Promise<UseOfCarOutput> {
    const carToRetun = this.inUseCar.find((use) => use.id === id)
    if (!carToRetun) {
      throw new Error('Use not found')
    }
    carToRetun.finishDate = new Date()
    return carToRetun
  }
}
