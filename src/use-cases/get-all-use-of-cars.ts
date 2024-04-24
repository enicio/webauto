import {
  UseOfCarOutput,
  UseCarRepository,
} from '@/repository/use-of-car-repository'

export class GetAllUseOfCarsUseCase {
  constructor(private useCarRepository: UseCarRepository) {}

  async execute(): Promise<UseOfCarOutput[]> {
    const carInUse = await this.useCarRepository.getAll()
    return carInUse
  }
}
