import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

async function createTeachers() {
  const result = await prisma.teachers.create({
    data: {
      name: faker.name.fullName(),
    }
  })

  console.log(result)
}

createTeachers()