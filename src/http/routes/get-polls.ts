import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function getPolls(app: FastifyInstance) {
  app.get('/polls', async (request, reply) => {
    const getPolls = await prisma.poll.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        options: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })
    return reply.status(200).send({ getPolls })
  })
}
