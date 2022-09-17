import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findOne() {
  const result = await prisma.courses.findFirst()
  console.log(result)
}

findOne()