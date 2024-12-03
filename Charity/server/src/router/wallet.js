import { Router } from "express";
import { buy, createUniqueAsset, market, NFT, wallet } from "../controller/GameShyftController.js";

const routerWallet = Router()

routerWallet.post('/',wallet )
routerWallet.post('/create-nft',NFT )
routerWallet.post('/asset',createUniqueAsset )
routerWallet.post('/market/:id',market )
routerWallet.post('/buy/:id',buy )

export default routerWallet