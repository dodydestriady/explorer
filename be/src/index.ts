import { Elysia } from "elysia";
import { folderRoute } from "./routes/folder";
import cors from "@elysiajs/cors";

const app = new Elysia()
.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"]
}))
.use(folderRoute)
.get("/", () => "Hello Elysia").listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
