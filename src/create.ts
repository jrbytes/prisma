import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function create() {
  const result = await prisma.courses.create({
    data: {
      name: 'Prisma',
      description: 'Prisma is a database toolkit',
      duration: 200,
    }
  })

  console.log(result)
}

create()