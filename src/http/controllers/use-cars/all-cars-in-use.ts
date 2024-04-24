import { makeGetAllInUseCarsUseCase } from '@/use-cases/factories/make-get-all-in-use-car-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function allCarsInUseCar(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const allInUseCars = makeGetAllInUseCarsUseCase()
    const allCarsInUse = await allInUseCars.execute()

    return reply.code(200).send(allCarsInUse)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const message = error.message
      return reply.code(400).send({ message })
    }
  }
}
