import { Elysia } from "elysia";
import { folderRoute } from "./routes/folder";
import cors from "@elysiajs/cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.BE_PORT || 4000;

const app = new Elysia()
.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"]
}))
.use(folderRoute)
.get("/", () => "Hello Elysia").listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
