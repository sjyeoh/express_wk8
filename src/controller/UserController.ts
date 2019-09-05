import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UserController {
    async getUser(request: Request, response: Response, next: NextFunction) {
        response.json({
            name: "Ming Hao",
            email:"minghao@gmail.com",
            contactNo: "0123456789"
        })
    }

    async create(request: Request, response: Response, next: NextFunction){
        response.send("Successfully created user!")
    }

    async users(request: Request, response: Response, next: NextFunction){
        response.json(storage.users)
    }

    async show(request: Request, response: Response, next: NextFunction){
        let user = {}
        for(let u of storage.users){
            if(u.id === parseInt(request.params.userId)){
                user = u
                break
            }
        }
        response.json(user)
    }

    async messages(request: Request, response: Response, next: NextFunction){
        if(request.query.userId){
            let result = []
            for(let message of storage.messages){
                if(message.user_id === parseInt(request.query.userId)){
                    result.push(message)
                }
            }
            response.json(result)
        } else {
            response.json(storage.messages)
        }
    }

    async signUp(request: Request, response: Response, next: NextFunction){
        const data = request.body
        storage.users.push({
            id: storage.users.length + 1,
            avatar: data.avatar,
            username: data.username,
            images: []
        })

        response.sendStatus(201)
    }
    async createMessage(request: Request, response: Response, next: NextFunction){
        const data = request.body
        storage.messages.push({
            id: storage.messages.length + 1,
            user_id: data.user_id,
            text: data.text,
            datetime: data.datetime
        })
        response.sendStatus(201)
    }
    async addImage(request: Request, response: Response, next: NextFunction){
        const image_url = request.body.image_url
        for( let u of storage.users){
            if(u.id === parseInt(request.params.userId)){
                u.images.push(image_url)
            }
        }
        response.sendStatus(201)
    }
}