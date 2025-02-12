import fastifyPlugin from 'fastify-plugin'
import fastifyMongodb from '@fastify/mongodb'
import { FastifyInstance } from 'fastify'

async function dbConnect(fastify: FastifyInstance, options: {}) {
  fastify.register(fastifyMongodb, {
    url: 'mongodb://localhost:27017',
  })
}

export default fastifyPlugin(dbConnect)
