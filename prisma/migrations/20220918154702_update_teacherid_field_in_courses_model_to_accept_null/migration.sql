-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teachersId" TEXT,
    CONSTRAINT "courses_teachersId_fkey" FOREIGN KEY ("teachersId") REFERENCES "teachers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_courses" ("createdAt", "description", "duration", "id", "name", "teachersId") SELECT "createdAt", "description", "duration", "id", "name", "teachersId" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
CREATE UNIQUE INDEX "courses_name_key" ON "courses"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
