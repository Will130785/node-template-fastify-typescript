import Fastify from 'fastify'
import routes from './routes'
import dbConnect from './app/dbConnect'
const fastify = Fastify({
  logger: true,
})

fastify.register(dbConnect)
fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
