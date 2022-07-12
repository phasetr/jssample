import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifyJwt from '@fastify/jwt';
import fastifyCors from '@fastify/cors';

import routes from './app/routes';
import { compare } from 'bcrypt';

const app = fastify();
const prisma = new PrismaClient();
app.register(fastifyJwt, {
  secret: 'supersecret',
});

app.register(fastifySwagger, {
  routePrefix: '/docs',
  openapi: {},
  exposeRoute: true,
});
app.register(fastifyCors, {
  origin: 'localhost',
  methods: '*',
});

app.get('/', async (_req, res) => {
  res.send({ hello: 'This is a root message!' });
});

app.register(routes.users, { prefix: 'users' });
app.register(routes.tasks, { prefix: 'tasks' });

app.post<{ Body: { email: string; password: string } }>(
  '/signin',
  async (req, reply) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await prisma.jwtSampleUser.findUnique({
      where: {
        email,
      },
    });

    if (user === null) {
      reply.send({ error: '404' });
      return;
    }

    if (await compare(password, user.password)) {
      // some code
      const token = app.jwt.sign({ userId: user.id });
      reply.send({ token });
    } else {
      reply.send({ error: '401' });
    }
  }
);

app.listen(
  {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0',
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`
  🚀 Server ready at: http://localhost:${process.env.PORT}
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`);
  }
);
