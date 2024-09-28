import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined // lubame Prisma kliendi globaalseks muutmiseks
}

export {}
