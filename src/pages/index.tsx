import Elysia from "elysia";
import { html, Html } from '@elysia/html'
import { Contianer } from "./components";
import PageAuthenicationPlugin from "../plugins/page-authentication";
import Dashboard from "./dashboard";
import Unauthorized from "./unauthorized";
import HomePage from "./homepage";
import SignIn from "./signin";

const pages = new Elysia().use(html()).use(PageAuthenicationPlugin).onBeforeHandle(async ({ redirect, user, path })=>{
    if(path.toLocaleLowerCase().startsWith("/dashboard") && !user){
        return redirect("/signin");
    }else if(path.toLocaleLowerCase().startsWith("/signin") && user){
        return redirect("/dashboard")
    }
})

pages.get("/", ()=>{
    return (
        <HomePage />
    )
});

pages.get("/dashboard", ({ user, path }) =>{
    if(user){
        return <Dashboard user={user}/>
    }
    return <Unauthorized path={path} />
});

pages.get("/signin", () =>{
    return <SignIn />
});

pages.get("/logout", ({ redirect, cookie: { token } }) =>{
    token?.set({ value: '', maxAge: 0, httpOnly: true });
    
    return redirect("/");
});

pages.all("*", ()=>{
    return (
        <Contianer tilte="BLink | Not Found">
            <h1>404: Page not found</h1>
        </Contianer>
    )
});

export default pages;