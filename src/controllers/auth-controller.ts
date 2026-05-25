import { authRepository, userRepository } from "../repositories";
import { Exception } from "../repositories/models";

namespace authController{
    export const singup = async (data: { fname: string, lname: string, email: string, password: string, matchingPassword: string}) =>{
        if(data.password === data.matchingPassword){
            const user = await userRepository.create(data)
            const auth = await authRepository.create({ userID: user.id, password: data.password })

            return { auth, user };
        }
        throw new Exception(401, "password mismatch")
    }

    export const login = async (data: { email: string, password: string}) =>{
        const user = await userRepository.find(data.email)
        const auth = await authRepository.get(user.id)

        if(auth.password === data.password){
            return { auth, user }
        }
        throw new Exception(401, "incorrect password")
    }
}

export default authController