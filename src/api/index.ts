import Elysia from "elysia";

const api = new Elysia({ prefix: "/api" })
api.get("/", ({ status })=>{
    return status(200, { message: "Welcome to BLink API" })
})

api.all("*", ({ status })=>{
    return status(404, { message: "endpoint doesnot exists" });
});

export default api;