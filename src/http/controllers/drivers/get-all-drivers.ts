import { makeGetAllDriversUseCase } from '@/use-cases/factories/make-get-all-drivers-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function getAllDrivers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string().optional(),
  })

  const { name } = bodySchema.parse(request.query)

  const getAllDriversUseCase = makeGetAllDriversUseCase()
  const allDrivers = await getAllDriversUseCase.execute(name)
  return reply.code(200).send(allDrivers)
}
