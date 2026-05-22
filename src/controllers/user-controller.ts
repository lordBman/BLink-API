import { LinkRepository, UserRepository } from "../repositories"

namespace UserController{
    export const init = async (id: string) =>{
        const user = await UserRepository.get(id)
        const links = await LinkRepository.get(user.id)

        return { user, links }
    }

    export const remove = async (id: string) =>{
        return await UserRepository.remove(id)
    }
}

export default UserController