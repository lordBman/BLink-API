import { AuthRepository, UserRepository } from "../repositories";
import { Exception } from "../repositories/models";

namespace AuthController{
    export const singup = async (data: { fname: string, lname: string, email: string, password: string}) =>{
        const user = await UserRepository.create(data)
        const auth = await AuthRepository.create({ userID: user.id, password: data.password })

        return { auth, user };
    }

    export const login = async (data: { email: string, password: string}) =>{
        const user = await UserRepository.find(data.email)
        const auth = await AuthRepository.get(user.id)

        if(auth.password === data.password){
            return { auth, user }
        }
        throw new Exception(401, "incorrect password")
    }
}

export default AuthController