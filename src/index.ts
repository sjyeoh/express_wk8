import * as express from "express";
import * as bodyParser from  "body-parser";
import {NextFunction, Request, Response} from "express";
import { Routes } from "./routes";

export const storage = {
    users: [
        {
          "id": 1,
          "avatar": "http://img_store/test_user_1.img",
          "username": "Test User 1",
          "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsP_Hj8LrD32X_EdwffUExSMAXavT-SBFHKTRepuTCx83AcJr5",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsP_Hj8LrD32X_EdwffUExSMAXavT-SBFHKTRepuTCx83AcJr5"
          ]
        },
        {
          "id": 2,
          "avatar": "http://img_store/test_user_2.img",
          "username": "Test User 2",
          "images": []
        },
    ],
    messages: [
        {
            "id":1,
            "text": "Hello world!",
            "user_id": 1,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":2,
            "text": "Wassup!",
            "user_id": 1,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":3,
            "text": "This is delicious!",
            "user_id": 2,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":4,
            "text": "Yo!!!",
            "user_id": 3,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":5,
            "text": "Aloha!",
            "user_id": 2,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":6,
            "text": "Lorem ipsum!",
            "user_id": 3,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":7,
            "text": "Cogito ergo sum!",
            "user_id": 1,
            "datetime": "2019/08/19 16:01:37"
        },
        {
            "id":8,
            "text": "Javascript rocks!",
            "user_id": 4,
            "datetime": "2019/08/19 16:01:37"
        },
    ]
}

export const srcPath = __dirname
const PORT = process.env.PORT || 3000;

// create and setup express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '\\public'));
// register routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

// start express server
app.listen(PORT);