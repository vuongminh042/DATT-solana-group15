import { Router } from "express";
import ContactController from "../controller/ContactController.js";
import { checkAuth, checkRoles } from "../middlewear/checkAuth.js";
const routerContact = Router()

routerContact.get('/', ContactController.get)
routerContact.get('/:id', ContactController.getDetail)

routerContact.use('/', checkAuth, checkRoles(['admin']))
routerContact.post('/', ContactController.create)
routerContact.delete('/:id', ContactController.delete)
routerContact.patch('/:id', ContactController.update)

export default routerContact