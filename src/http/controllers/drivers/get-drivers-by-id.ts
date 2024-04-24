import { makeGetDriverByIdUseCase } from '@/use-cases/factories/make-get-driver-by-id-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

export async function getDriverById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    id: z.string(),
  })

  const { id } = bodySchema.parse(request.params)

  const getAllDriversUseCase = makeGetDriverByIdUseCase()
  const driver = await getAllDriversUseCase.execute(id)
  return reply.code(200).send(driver)
}
