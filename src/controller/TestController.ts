import {NextFunction, Request, Response} from "express";
import { storage } from "..";
import { request } from "https";

export class TestController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.send("Hello World!")
    }

    async goodbye(request: Request, response: Response, next: NextFunction) {
        response.send("Goodbye!")
    }
    
    async greet(request: Request, response: Response, next: NextFunction){
        response.send(`${request.query.greeting}, ${request.params.username}`)
    }
}