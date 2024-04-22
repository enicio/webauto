export interface UseOfCarInput {
  id: string | number
  driverId: string
  carId: string
  startDate: Date
  finishDate?: Date | null
  reason: string
}

export interface UseOfCarOutput {
  id: string | number
  driverId: string
  carId: string
  startDate: Date
  finishDate?: Date | null
  reason: string
}

export interface UseCarRepository {
  findById(id: string): Promise<UseOfCarOutput | null>
  create(data: UseOfCarInput): Promise<UseOfCarOutput>
  getAll(): Promise<UseOfCarOutput[]>
  pendigCarReturn(driverId: string): Promise<UseOfCarOutput | null>
  returnCar(id: string): Promise<UseOfCarOutput>
}
