import {Elysia} from "elysia";
import { getFolders, getFolder } from "../controllers/folderController";

export const folderRoute = new Elysia()
.get("/folders", ({ query }) => getFolders(query))
.get("/folders/:id", ({ params }) => getFolder(params))
