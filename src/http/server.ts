import Fastify from 'fastify'
import { createPoll } from './routes/create-poll'

const app = Fastify({
  logger: true
})

app.register(createPoll)

try {
  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running 🚀')
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
