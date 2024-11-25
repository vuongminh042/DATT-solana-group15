import { Router } from "express";
import { createUniqueAsset, NFT, wallet } from "../controller/GameShyftController.js";

const routerWallet = Router()

routerWallet.post('/',wallet )
routerWallet.post('/create-nft',NFT )
routerWallet.post('/asset',createUniqueAsset )

export default routerWallet