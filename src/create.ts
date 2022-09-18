import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

async function create() {
  const result = await prisma.courses.create({
    data: {
      name: faker.hacker.noun(),
      description: faker.hacker.phrase(),
      duration: 100,
    }
  })

  console.log(result)
}

create()