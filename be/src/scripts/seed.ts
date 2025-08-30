import { prisma } from "../prisma/client";

async function main() {
  await prisma.file.deleteMany();
  await prisma.folder.deleteMany();

  async function createFolder(
    name: string,
    parentId: number | null,
    level: number,
    maxLevel: number
  ) {
    const folder = await prisma.folder.create({
      data: { name, parentId },
    });

    for (let i = 1; i <= 2; i++) {
      const savedName = `file ${name}-${i}-${i == maxLevel? 'empty' : ''}`
      await prisma.file.create({
        data: {
          name: savedName,
          folderId: folder.id,
          extension: "txt",
        },
      });
    }

    if (level >= maxLevel) return;

    for (let i = 1; i <= 2; i++) {
      await createFolder(`${name}-${i}`, folder.id, level + 1, maxLevel);
    }

    // Add empty folder
    if (level % 3 === 0) {
      await prisma.folder.create({
        data: { name: `${name}-empty`, parentId: folder.id },
      });
    }
  }

  for (let r = 1; r <= 3; r++) {
    await createFolder(`folder-${r}`, null, 1, 10);
  }

  console.log("Seeding done!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
