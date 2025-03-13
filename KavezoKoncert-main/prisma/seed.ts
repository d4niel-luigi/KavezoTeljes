import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()
async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.koncert.create({
      data: {
        performer: faker.music.artist(),
        started_at: faker.date.recent(),
        lenght: faker.number.int({ min: 30, max: 150 }),
        fail: faker.datatype.boolean({probability: 0.1}),
      }
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
