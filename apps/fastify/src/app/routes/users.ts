import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyRegisterOptions,
  RegisterOptions,
} from 'fastify';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const users: FastifyPluginCallback = (
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

  fastify.post<{
    Body: {
      email: string;
      password: string;
      tasks: Prisma.TaskCreateInput[];
    };
  }>(`/`, async (req, res) => {
    const { email, password, tasks } = req.body;

    const taskData = tasks?.map((task: Prisma.TaskCreateInput) => {
      return { title: task?.title };
    });

    const result = await prisma.user.create({
      data: {
        email,
        password,
        tasks: {
          create: taskData,
        },
      },
    });
    res.send(result);
  });

  fastify.get('/', async (req, res) => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });
    res.send(users);
  });

  fastify.get<{ Params: { id: number } }>('/:id', async (req, res) => {
    const { id } = req.params;
    const users = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
      },
    });
    res.send(users);
  });

  fastify.delete<{ Params: { id: number } }>('/:id', async (req, res) => {
    const { userId } = await req.jwtDecode();
    const { id } = req.params;

    if (userId !== id) {
      res.send({ err: 401 });
    }

    const users = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.send(users);
  });

  fastify.get<{ Params: { userId: number } }>(
    '/:userId/tasks',
    async (req, res) => {
      const { userId } = req.params;
      const task = await prisma.task.findMany({
        where: {
          userId,
        },
      });
      res.send(task);
    }
  );

  fastify.post<{ Body: { title: string }; Params: { userId: number } }>(
    '/:userId/tasks',
    async (req, res) => {
      const { title } = req.body;
      const { userId } = req.params;
      const result = await prisma.task.create({
        data: {
          title,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      res.send(result);
    }
  );

  done();
};
