import { makeRegisterCarUseCase } from '@/use-cases/factories/make-register-car-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    brand: z.string(),
    color: z.string(),
    plate: z.string(),
  })

  const { brand, color, plate } = bodySchema.parse(request.body)

  const registerCarUseCase = makeRegisterCarUseCase()
  const carCreated = await registerCarUseCase.execute({
    brand,
    color,
    plate,
  })
  return reply.code(201).send(carCreated)
}
