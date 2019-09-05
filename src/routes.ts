import {TestController} from "./controller/TestController";
import { UserController } from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},{
    method: "get",
    route: "/goodbye",
    controller: TestController,
    action: "goodbye"
}, {
    method: "get",
    route: "/getUser",
    controller: UserController,
    action: "getUser"
}, {
    method: "post",
    route: "/postUser",
    controller: UserController,
    action: "create"
},{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "users"
}, {
    method: "get",
    route: "/greet/:username",
    controller: TestController,
    action: "greet"
},{
    method: "get",
    route: "/api/users/:userId",
    controller: UserController,
    action: "show"
},{
    method: "get",
    route: "/api/messages",
    controller: UserController,
    action: "messages"
}, {
    method: "post",
    route: "/api/signup",
    controller: UserController,
    action: "signUp"
}, {
    method: "post",
    route: "/api/messages",
    controller: UserController,
    action: "createMessage"
}, {
    method: "post",
    route: "/api/users/:userId/images",
    controller: UserController,
    action: "addImage"
}];
