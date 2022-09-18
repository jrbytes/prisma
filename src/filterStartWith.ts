import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function filterStartWith() {
  const course = await prisma.courses.findFirst({
    where: {
      name: {
        startsWith: 'segur',
        mode: 'insensitive',
      }
    },
  })

  console.log(course)
}

filterStartWith()