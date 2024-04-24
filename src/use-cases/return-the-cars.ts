import { InMemoryUseOfCarRepository } from '@/repository/in-memory/in-memory-use-car'
import type { UseOfCarOutput } from '@/repository/use-of-car-repository'

interface ReturnOfCarUseCaseProps {
  driverId: string
  finishDate: string
}
export class ReturnOfCarUseCase {
  constructor(private useOfCarRepository: InMemoryUseOfCarRepository) {}

  async execute({
    driverId,
    finishDate,
  }: ReturnOfCarUseCaseProps): Promise<UseOfCarOutput> {
    const pendingCarReturn = await this.useOfCarRepository.pendigCarReturn(
      driverId,
    )

    if (!pendingCarReturn) {
      throw new Error('Driver don`t have a car in use')
    }

    const carToReturn = await this.useOfCarRepository.returnCar(
      pendingCarReturn.id,
      finishDate || '',
    )

    return carToReturn
  }
}
