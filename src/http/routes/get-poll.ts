import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getPoll(app: FastifyInstance) {
  app.get('/polls/:pollId', async (request, reply) => {
    // Define the shape of the incoming request.params
    const getPollParams = z.object({pollId: z.string().uuid()})
    
    console.log(request.params)
    // Parse the incoming request
    const { pollId } = getPollParams.parse(request.params)

  
    // Fetch the poll from the database
    const poll = await prisma.poll.findUnique({
      where: { id: pollId },
      include: { 
        options: {
          select: { 
            id: true, 
            title: true 
          }
        }
      }
    })
  
    // Return the poll to the client
    return reply.send({ poll })
  })
}