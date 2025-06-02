import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const estudiante = await prisma.estudiante.update({
    where: { id: Number(params.id) },
    data
  });
  return Response.json(estudiante);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const estudiante = await prisma.estudiante.delete({
    where: { id: Number(params.id) }
  });
  return Response.json(estudiante);
}