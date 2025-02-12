import { FastifyRequest, FastifyReply } from 'fastify'

const testController = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(request.body)
  return { hello: 'world' }
}

export default {
  testController,
}
