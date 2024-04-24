import { makeReturnOfCarUseCase } from '@/use-cases/factories/make-return-car-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function returnCar(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    driverId: z.string(),
    finishDate: z.string().date(),
  })

  const { driverId, finishDate } = bodySchema.parse(request.body)
  try {
    const returnOfCar = makeReturnOfCarUseCase()
    const useOfCarRegistred = await returnOfCar.execute({
      driverId,
      finishDate,
    })
    return reply.code(201).send(useOfCarRegistred)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const message = error.message
      return reply.code(400).send({ message })
    }
  }
}
