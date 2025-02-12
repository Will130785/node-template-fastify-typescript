import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import controllers from '../controllers'

async function routes(fastify: FastifyInstance) {
  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        type: 'object',
        properties: {
          someKey: { type: 'string' },
          someOtherKey: { type: 'number' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
  }
  const client = fastify.mongo.client
  fastify.post('/', opts, controllers.testController)
  fastify.get('/get-users', async (request, reply) => {
    const db = client.db('pdp-hub')
    const collection = db.collection('users')
    const result = await collection?.find({}).toArray()
    return result
  })
}

export default routes
