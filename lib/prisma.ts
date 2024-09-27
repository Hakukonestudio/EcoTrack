import { PrismaClient } from '@prisma/client'

// TypeScriptile tuleb lisada globaalne deklareerimine
declare global {
  var prisma: PrismaClient | undefined
}

// Kui oleme produktsioonikeskkonnas, loome uue Prisma kliendi,
// arenduskeskkonnas kasutame globaalselt hoitavat instantsi.
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
