-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "coursesId" TEXT,
    "modulesId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "courses_modules_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "courses" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "courses_modules_modulesId_fkey" FOREIGN KEY ("modulesId") REFERENCES "modules" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
