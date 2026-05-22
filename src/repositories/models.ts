export interface User{
    id: string

    fname: string,
    lname: string
    email: string
}

export interface Auth{
    userID: string

    password: string
    role: string
}

export interface Link{
    id: string

    name: string
    url: string
    originalURL: string
    createdAt: Date

    ownerID: string
}

export class Exception extends Error{
    private __status: number
    
    public get status() : number {
        return this.__status
    }
    
    constructor(status: number, message: string){
        super(message)

        this.__status = status
    }
}