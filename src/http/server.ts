import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import { z } from 'zod'

const app = Fastify({
  logger: true
})
const prisma = new PrismaClient()

app.post('/polls', async (request, reply) => {
  const createPoolBody = z.object({
    title: z.string()
  })
  
  const { title } = createPoolBody.parse(request.body)

  const poll = await prisma.poll.create({
    data: {
      title
    }
  })

  return reply.status(201).send({ pollID: poll.id })
})

try {
  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running 🚀')
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
