import { makeRegisterDriverUseCase } from '@/use-cases/factories/make-register-driver-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
  })

  const { name } = bodySchema.parse(request.body)

  const registerUseCase = makeRegisterDriverUseCase()
  const driverCreated = await registerUseCase.execute({ name })
  return reply.code(201).send(driverCreated)
}
