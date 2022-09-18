import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function filterOr() {
  const course = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "Rede"
          }
        },
        {
          name: {
            contains: "Hardware"
          }
        }
      ],
      AND: {
        duration: 100
      }
    },
    include: {
      teacher: true
    }
  })

  console.log(course)
}

filterOr()