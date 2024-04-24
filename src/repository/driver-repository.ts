export interface DriverInput {
  id?: string
  name: string
}

export interface DriverOutput {
  id: string
  name: string
}

export interface DriverRepository {
  findById(id: string): Promise<DriverOutput | null>
  create(data: DriverInput): Promise<DriverOutput>
  getAll(name: string): Promise<DriverOutput[]>
  delete(id: string): Promise<void>
  update(data: DriverInput): Promise<DriverOutput>
}
