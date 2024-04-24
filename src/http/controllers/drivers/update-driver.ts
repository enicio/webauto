import { makeUpdateUseCase } from '@/use-cases/factories/make-update-driver-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function updateDriver(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    id: z.string(),
    name: z.string(),
  })

  const { id, name } = bodySchema.parse(request.body)

  const updateDriverUseCase = makeUpdateUseCase()
  const driver = await updateDriverUseCase.execute({ id, name })
  return reply.code(200).send(driver)
}
