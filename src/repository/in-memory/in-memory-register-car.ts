import { CarRepository, CarInput, CarOutput } from '../car-repository'
import { v4 as uuidv4 } from 'uuid'

export class InMemoryCarRepository implements CarRepository {
  public items: CarOutput[] = []
  async findById(id: string): Promise<CarOutput | null> {
    const car = this.items.find((item) => item.id === id)
    if (!car) {
      return null
    }
    return {
      id: car.id as string,
      plate: car.plate,
      color: car.color,
      brand: car.brand,
    }
  }

  async create(data: CarInput): Promise<CarOutput> {
    let id = data.id
    if (!data.id) {
      id = uuidv4()
    }
    const car: CarOutput = {
      id: id as string,
      plate: data.plate,
      color: data.color,
      brand: data.brand,
    }

    this.items.push(car)
    return car
  }

  async getAll(): Promise<CarOutput[]> {
    return this.items.map((item: CarInput) => ({
      id: item.id as string,
      plate: item.plate,
      color: item.color,
      brand: item.brand,
    }))
  }
}
