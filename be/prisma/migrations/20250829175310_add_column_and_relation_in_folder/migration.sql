-- AlterTable
ALTER TABLE "public"."Folder" ADD COLUMN     "parentId" INTEGER,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "public"."Folder" ADD CONSTRAINT "Folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
