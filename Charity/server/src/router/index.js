import { Router } from "express";
import routerAuth from "./auth.js";
import routerCategory from "./category.js";
import routerContact from "./contact.js";
import routerCause from "./cause.js";
import routerPost from "./post.js";

const router = Router()
router.use('/auth', routerAuth)
router.use('/category', routerCategory)
router.use('/contact', routerContact)
router.use('/cause', routerCause)
router.use('/post', routerPost)


export default router
