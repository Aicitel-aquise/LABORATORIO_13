/*
  Warnings:

  - You are about to drop the column `apellido` on the `Estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `edad` on the `Estudiante` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreCurso" TEXT NOT NULL,
    "descripcion" TEXT
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "fechaInscripcion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Inscripcion_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscripcion_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Estudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL
);
INSERT INTO "new_Estudiante" ("correo", "id", "nombre") SELECT "correo", "id", "nombre" FROM "Estudiante";
DROP TABLE "Estudiante";
ALTER TABLE "new_Estudiante" RENAME TO "Estudiante";
CREATE UNIQUE INDEX "Estudiante_correo_key" ON "Estudiante"("correo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
