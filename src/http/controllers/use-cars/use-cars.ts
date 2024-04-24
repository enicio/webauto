import { makeUseOfCarUseCase } from '@/use-cases/factories/make-use-of-car-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function useCar(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    driverId: z.string(),
    carId: z.string(),
    startDate: z.string().date(),
    finishDate: z.string().date().optional(),
    reason: z.string(),
  })

  const { carId, driverId, startDate, finishDate, reason } = bodySchema.parse(
    request.body,
  )

  try {
    const registerUseOfCar = makeUseOfCarUseCase()
    const useOfCarRegistred = await registerUseOfCar.execute({
      carId,
      driverId,
      startDate,
      finishDate,
      reason,
    })
    return reply.code(201).send(useOfCarRegistred)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const message = error.message
      return reply.code(400).send({ message })
    }
  }
}
