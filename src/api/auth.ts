import Elysia, { t } from "elysia";
import jetLogger from "jet-logger";

import { authController } from "../controllers";
import { Exception } from "../repositories/models";
import JWTPlugin from "../plugins/jwt-plugin";

const auth = new Elysia({ prefix: "/auth" }).use(JWTPlugin)

auth.post("/login", async ({encrypt, body, status, cookie: { token } })=>{
    try{
        const init = await authController.login(body);

        const value = await encrypt(init.user);
        token?.set({ value, httpOnly: true, maxAge: 7 * 86400 });

        return status(200, { message: "login successful", data: init.user });
    }catch(error){
        if(error instanceof Exception){
            const exception = error as Exception;

            return status(exception.status, { message: exception.message });
        }else{
            jetLogger.err(error)
            return status(503, { message: "an internal server error occurred when signing in user" });
        }

    }
}, { body: t.Object({ email: t.String(), password: t.String() }) });

auth.post("/register", async ({encrypt, body, status, cookie: { token } })=>{
    try{
        const init = await authController.singup(body);

        const value = await encrypt(init.user);
        token?.set({ value, httpOnly: true, maxAge: 7 * 86400 });

        return status(200, { message: "signup successful", data: init.user });
    }catch(error){
        if(error instanceof Exception){
            const exception = error as Exception

            return status(exception.status, { message: exception.message });
        }else{
            jetLogger.err(error)
            return status(503, { message: "an internal server error occurred when signing in user" });
        }

    }
}, { body: t.Object({ fname: t.String(), lname: t.String(), email: t.String(), password: t.String(), matchingPassword: t.String() }) });

auth.get("/logout", ({ status, cookie: { token } }) =>{
    token?.set({ value: '', maxAge: 0, httpOnly: true });
    
    return status(200, { message: "logout success" })
});

export default auth;