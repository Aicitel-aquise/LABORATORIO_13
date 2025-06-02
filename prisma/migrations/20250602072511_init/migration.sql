-- CreateTable
CREATE TABLE "Estudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "correo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_correo_key" ON "Estudiante"("correo");
