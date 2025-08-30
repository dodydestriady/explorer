import { prisma } from "../prisma/client";

export async function getFolders(req: any) {
    const folders = await prisma.folder.findMany({
        where: {parentId: null},
        include: {children: true, files: true}
    })

    return folders;
}

export async function getFolder(params: { id: any }) {
    const folder = await prisma.folder.findMany({
        where: {id: Number(params.id)},
        include: {children: true, files: true}
    })

    return folder;
}