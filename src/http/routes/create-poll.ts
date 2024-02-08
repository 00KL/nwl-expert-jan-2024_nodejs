import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function createPoll(app: FastifyInstance) {
  app.post('/polls', async (request, reply) => {
    // Define the shape of the incoming request.body
    const createPollBody = z.object({
      title: z.string(),
      options: z.array(z.string()),
    })
  
    // Parse the incoming request
    const { title, options } = createPollBody.parse(request.body)
  
    // Create the poll in the database
    const poll = await prisma.poll.create({
      data: {
        title,
        options: {
          createMany: {
            data: options.map(option => {return { title: option }})
          }
        },
      }
    })
  
    // Return the pollId to the client
    return reply.status(201).send({ pollId: poll.id })
  })
}