import { Prisma, PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

const jwtSampleUserData: Prisma.JwtSampleUserCreateInput[] = [
  {
    email: 'test1@test',
    password: hashSync('testpassword', 10),
    tasks: {
      create: [
        {
          title: 'test1',
        },
      ],
    },
  },
  {
    email: 'test2@test',
    password: hashSync('testpassword', 10),
    tasks: {
      create: [
        {
          title: 'test2',
        },
      ],
    },
  },
];

const userCreate = async () => {
  const jwtSampleUsers = [];
  for (const jsu of jwtSampleUserData) {
    const jwtSampleUser = prisma.jwtSampleUser.create({
      data: jsu,
    });
    jwtSampleUsers.push(jwtSampleUser);
  }
  return await prisma.$transaction(jwtSampleUsers);
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  await userCreate();
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
