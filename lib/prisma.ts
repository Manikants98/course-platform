import { PrismaClient } from "@prisma/client";

const Prisma = globalThis as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  Prisma.prisma ?? new PrismaClient({ log: ["error", "warn"] });

if (process.env.NODE_ENV !== "production") Prisma.prisma = prisma;
