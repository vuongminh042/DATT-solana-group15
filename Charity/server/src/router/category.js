import { Router } from "express";
import CategoryController from "../controller/CategoryController.js";
import { checkAuth, checkRoles } from "../middlewear/checkAuth.js";

const routerCategory = Router()

routerCategory.get('/', CategoryController.get)
routerCategory.get('/:id', CategoryController.getDetail)

routerCategory.use('/', checkAuth, checkRoles(['admin']))
routerCategory.post('/', CategoryController.create)
routerCategory.delete('/:id', CategoryController.delete)
routerCategory.patch('/:id', CategoryController.update)

export default routerCategory