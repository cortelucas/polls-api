import cookie from '@fastify/cookie'
import Fastify from 'fastify'
import { createPoll, getPoll, getPolls, voteOnPoll } from './routes'

const app = Fastify({
  logger: true
})

app.register(cookie, {
  secret: 'polls-app',
  hook: 'onRequest'
})

const routes = [ createPoll, getPoll, getPolls, voteOnPoll ]

for (const route of routes) {
  app.register(route)
}


try {
  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running 🚀')
  })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
