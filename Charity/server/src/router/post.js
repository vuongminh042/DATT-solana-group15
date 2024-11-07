import { Router } from "express";
import PostController from "../controller/PostController.js";

const routerPost = Router()

routerPost.get('/', PostController.get)
routerPost.get('/:id', PostController.getDetail)
routerPost.post('/', PostController.create)
routerPost.delete('/:id', PostController.delete)
routerPost.patch('/:id', PostController.update)

export default routerPost