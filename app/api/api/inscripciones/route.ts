import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const inscripciones = await prisma.inscripcion.findMany({
    include: {
      estudiante: true,
      curso: true,
    },
  });

  return NextResponse.json(inscripciones);
}
  