export interface UseOfCarInput {
  id?: string
  driverId: string
  carId: string
  startDate: string
  finishDate?: string | null
  reason: string
}

export interface UseOfCarOutput {
  id: string
  driverId: string
  carId: string
  startDate: string
  finishDate?: string | null
  reason: string
}

export interface UseCarRepository {
  findById(id: string): Promise<UseOfCarOutput | null>
  create(data: UseOfCarInput): Promise<UseOfCarOutput>
  getAll(): Promise<UseOfCarOutput[]>
  pendigCarReturn(driverId: string): Promise<UseOfCarOutput | null>
  returnCar(id: string, finishDate: string): Promise<UseOfCarOutput>
}
