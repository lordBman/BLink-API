import { Elysia } from "elysia";
import { staticPlugin } from '@elysia/static'
import jetLogger from "jet-logger";

import pages from "./pages";
import api from "./api";

const app = new Elysia()
.use(pages).use(api).use(staticPlugin({ assets: "./assets", prefix: "/assets" }))

app.listen(3000, (server)=>{
    jetLogger.info(`🦊 Elysia is running at ${server.hostname}:${server.port}`)
});
