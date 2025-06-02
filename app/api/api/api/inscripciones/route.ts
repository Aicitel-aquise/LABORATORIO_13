import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const actualizada = await prisma.inscripcion.update({
    where: { id },
    data: {
      estudianteId: body.estudianteId,
      cursoId: body.cursoId,
    },
  });

  return Response.json(actualizada);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  await prisma.inscripcion.delete({ where: { id } });
  return Response.json({ mensaje: 'Inscripción eliminada' });
}