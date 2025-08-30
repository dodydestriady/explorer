-- CreateTable
CREATE TABLE "public"."File" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "folderId" INTEGER,
    "extension" TEXT NOT NULL,
    "size" BIGINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."File" ADD CONSTRAINT "File_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "public"."Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
