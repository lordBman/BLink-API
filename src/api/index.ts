import Elysia from "elysia";

import auth from "./auth";
import { apiAuthenicationPlugin } from "../plugins";


const secure = new Elysia().use(apiAuthenicationPlugin)
secure.get("/", ({ status })=>{
    return status(200, { message: "Welcome to BLink API" })
});

secure.all("*", ({ status })=>{
    return status(404, { message: "Endpoint doesnot exists" });
});

const api = new Elysia({ prefix: "/api" })
.use(auth)
.use(secure)

export default api;