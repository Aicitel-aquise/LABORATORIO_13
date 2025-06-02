import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const estudiantes = await prisma.estudiante.findMany();
  return Response.json(estudiantes);
}

export async function POST(req: Request) {
  const data = await req.json();
  const nuevo = await prisma.estudiante.create({ data });
  return Response.json(nuevo);
}