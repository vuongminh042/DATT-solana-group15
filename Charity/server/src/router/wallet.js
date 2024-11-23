import { Router } from "express";
import { wallet } from "../controller/GameShyftController.js";

const routerWallet = Router()

routerWallet.post('/',wallet )

export default routerWallet