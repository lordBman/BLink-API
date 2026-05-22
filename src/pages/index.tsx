import Elysia from "elysia";
import { html, Html } from '@elysia/html'
import { Contianer } from "./components";

const pages = new Elysia({ prefix: "/" }).use(html())

pages.get("/", ()=>{
    return (
        <Contianer tilte="BLink | Home">
            <h1>Welcome to Blink</h1>
        </Contianer>
    )
})

pages.all("*", ()=>{
    return (
        <Contianer tilte="BLink | Not Found">
            <h1>404: Page not found</h1>
        </Contianer>
    )
});

export default pages;