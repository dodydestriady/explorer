import { faker } from "@faker-js/faker";
import { prisma } from "../prisma/client";

async function main() {
  // Hapus data lama
  await prisma.file.deleteMany();
  await prisma.folder.deleteMany();

  // Generate 5 root folders
  for (let i = 0; i < 5; i++) {
    const rootFolder = await prisma.folder.create({
      data: {
        name: faker.word.noun(),
      },
    });

    // Generate 3 subfolders tiap root
    for (let j = 0; j < 3; j++) {
      const subFolder = await prisma.folder.create({
        data: {
          name: faker.word.noun(),
          parentId: rootFolder.id,
        },
      });

      // Generate 2 file tiap subfolder
      for (let k = 0; k < 2; k++) {
        await prisma.file.create({
          data: {
            name: faker.word.noun(),
            folderId: subFolder.id,
            extension: "txt",
          },
        });
      }
    }
  }

  console.log("Seeding done!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
