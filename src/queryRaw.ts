import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function queryRaw() {
  const result = await prisma.$queryRaw(
    Prisma.sql`
      SELECT 
        courses.name AS course_name,
        courses.description AS course_description,
        courses.duration AS course_duration,
        teachers.name AS teacher_name
      FROM courses INNER JOIN teachers ON courses."teachersId"=teachers.id;
    `,
  )
  console.log(result)
}

queryRaw()