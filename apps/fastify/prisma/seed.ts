import { Prisma, PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
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

const transfer = async () => {
  const users = [];
  for (const u of userData) {
    const user = prisma.user.create({
      data: u,
    });
    users.push(user);
  }
  return await prisma.$transaction(users);
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);
  await transfer();
  console.log(`Seeding finished.`);
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
