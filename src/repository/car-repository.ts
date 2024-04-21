export interface CarInput {
  id?: string
  brand: string
  color: string
  plate: string
}

export interface CarOutput {
  id: string
  brand: string
  color: string
  plate: string
}

export interface CarRepository {
  findById(id: string): Promise<CarOutput | null>
  create(data: CarInput): Promise<CarOutput>
  getAll(): Promise<CarOutput[]>
}
