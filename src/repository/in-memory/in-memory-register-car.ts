import { CarRepository, CarInput, CarOutput } from '../car-repository'
import { v4 as uuidv4 } from 'uuid'

const items: CarOutput[] = []
export class InMemoryCarRepository implements CarRepository {
  async findById(id: string): Promise<CarOutput | null> {
    const car = items.find((item) => item.id === id)
    if (!car) {
      return null
    }
    return {
      id: car.id,
      plate: car.plate,
      color: car.color,
      brand: car.brand,
    }
  }

  async create(data: CarInput): Promise<CarOutput> {
    const car = {
      id: data.id || uuidv4(),
      plate: data.plate,
      color: data.color,
      brand: data.brand,
    }

    items.push(car)
    return car
  }

  async getAll(): Promise<CarOutput[]> {
    return items.map((item: CarInput) => ({
      id: item.id || '',
      plate: item.plate,
      color: item.color,
      brand: item.brand,
    }))
  }
}
