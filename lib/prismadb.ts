import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client