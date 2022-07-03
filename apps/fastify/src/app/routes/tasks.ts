import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyRegisterOptions,
  RegisterOptions,
} from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const tasks: FastifyPluginCallback = (
  fastify: FastifyInstance,
  opts: FastifyRegisterOptions<RegisterOptions>,
  done: (err?: Error | undefined) => void
) => {
  fastify.addHook('onRequest', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.put<{
    Params: { id: number };
    Body: { title?: string; completed?: boolean };
  }>('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await prisma.jwtSampleTask.update({
      data: {
        title,
        completed,
      },
      where: {
        id,
      },
    });
    res.send(task);
  });

  fastify.delete<{ Params: { id: number } }>('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await prisma.jwtSampleTask.findUnique({
      where: {
        id,
      },
    });

    if (task === null) {
      res.send({ err: 404 });
      return;
    }

    const { userId } = await req.jwtDecode();

    if (userId !== task.userId) {
      res.send({ err: 401 });
      return;
    }

    await prisma.jwtSampleTask.delete({
      where: {
        id,
      },
    });
    res.send(task);
  });

  done();
};
