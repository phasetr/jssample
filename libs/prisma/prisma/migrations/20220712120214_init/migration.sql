-- CreateTable
CREATE TABLE "JwtSampleUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "JwtSampleUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JwtSampleTask" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "JwtSampleTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JwtSampleUser_email_key" ON "JwtSampleUser"("email");

-- AddForeignKey
ALTER TABLE "JwtSampleTask" ADD CONSTRAINT "JwtSampleTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "JwtSampleUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
