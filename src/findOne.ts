import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findOne() {
  const result = await prisma.courses.findFirst({ include: { teacher: true } })
  console.log(result)
}

findOne()