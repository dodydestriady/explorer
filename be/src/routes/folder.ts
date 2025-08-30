import {Elysia} from "elysia";
import { getFolders, getFolder } from "../controllers/folderController";

export const folderRoute = new Elysia()
.get("/folders", getFolders)
.get("/folders/:id", ({ params }) => getFolder(params))
