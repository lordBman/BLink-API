import { linkRepository, userRepository } from "../repositories"

namespace userController{
    export const init = async (id: string) =>{
        const user = await userRepository.get(id)
        const links = await linkRepository.get(user.id)

        return { user, links }
    }

    export const remove = async (id: string) =>{
        return await userRepository.remove(id)
    }
}

export default userController