import Fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { getPolls } from './routes/get-polls'

const app = Fastify({
  logger: true
})

app.register(createPoll)
app.register(getPolls)
app.register(getPoll)

try {
  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running 🚀')
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
