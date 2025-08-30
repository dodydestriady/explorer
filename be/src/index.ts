import { Elysia } from "elysia";
import { folderRoute } from "./routes/folder";

const app = new Elysia()
.use(folderRoute)
.get("/", () => "Hello Elysia").listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
