import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function update() {
  const result = await prisma.courses.update({
    where: { id: '0c83da78-e40f-4f16-8c7c-e9df3cd85f0b' },
    data: {
      name: 'Curso de Prisma',
      description: 'Curso Simples de Prisma',
      duration: 300
    },
  })
  console.log(result)
}

update()