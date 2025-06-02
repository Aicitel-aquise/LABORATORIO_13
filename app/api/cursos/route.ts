import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const cursos = await prisma.curso.findMany();
  return Response.json(cursos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const nuevoCurso = await prisma.curso.create({
    data: {
      nombreCurso: body.nombreCurso,
      descripcion: body.descripcion,
    },
  });
  return Response.json(nuevoCurso);
}