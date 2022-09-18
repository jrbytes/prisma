import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function pagination() {
  let skip = 0
  let exist = true
  let take = 2

  while (exist) {
    const result = await prisma.courses.findMany({
      skip,
      take,
    })
    skip += take

    if (result.length <= 0) {
      exist = false
      return
    }

    console.log(result)
    console.log('---------------------------------------------------')
  }
}

pagination()