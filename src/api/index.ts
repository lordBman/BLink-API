import Elysia from "elysia";

import auth from "./auth";
import { apiAuthenicationPlugin } from "../plugins";
import user from "./user";

apiAuthenicationPlugin.use(user)
apiAuthenicationPlugin.get("/", ({ status })=>{
    return status(200, { message: "Welcome to BLink API" })
});

apiAuthenicationPlugin.all("*", ({ status })=>{
    return status(404, { message: "Endpoint doesnot exists" });
});

const api = new Elysia({ prefix: "/api" })
.use(auth)
.use(apiAuthenicationPlugin)

export default api;