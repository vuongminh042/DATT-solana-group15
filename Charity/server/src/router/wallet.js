import { Router } from "express";
import { buy, createUniqueAsset, deletes, market, NFT, wallet } from "../controller/GameShyftController.js";

const routerWallet = Router()

routerWallet.post('/',wallet )
routerWallet.post('/create-nft',NFT )
routerWallet.post('/asset',createUniqueAsset )
routerWallet.post('/market/:id',market )
routerWallet.post('/buy/:id',buy )
routerWallet.post('/delete/:id',deletes )

export default routerWallet