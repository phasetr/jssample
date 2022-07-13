import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyRegisterOptions,
  RegisterOptions,
} from 'fastify';
import { hashSync } from 'bcrypt';
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
      tasks: Prisma.JwtSampleTaskCreateInput[];
    };
  }>(`/`, async (req, res) => {
    const { email, password, tasks } = req.body;

    const taskData = tasks?.map((task: Prisma.JwtSampleTaskCreateInput) => {
      return { title: task?.title };
    });

    const result = await prisma.jwtSampleUser.create({
      data: {
        email: email,
        password: hashSync(password, 10),
        tasks: {
          create: taskData,
        },
      },
    });
    res.send(result);
  });

  fastify.get('/', async (req, res) => {
    const users = await prisma.jwtSampleUser.findMany({
      select: {
        id: true,
        email: true,
      },
    });
    res.send(users);
  });

  fastify.get<{ Params: { id: number } }>('/:id', async (req, res) => {
    const { id } = req.params;
    const users = await prisma.jwtSampleUser.findUnique({
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
    const id = Number(req.params["id"]);

    /*
    const userId = await req.user["userId"];
    if (userId !== id) {
      res.send({ err: 401 });
    }
     */

    const users = await prisma.jwtSampleUser.delete({ where: { id } });
    res.send(users);
  });

  fastify.get<{ Params: { userId: number } }>(
    '/:userId/tasks',
    async (req, res) => {
      const { userId } = req.params;
      const task = await prisma.jwtSampleTask.findMany({
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
      const result = await prisma.jwtSampleTask.create({
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
