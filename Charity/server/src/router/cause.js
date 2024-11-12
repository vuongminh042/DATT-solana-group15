import { Router } from "express";
import CauseController from "../controller/CauseController.js";
import { checkAuth, checkRoles } from "../middlewear/checkAuth.js";

const routerCause = Router();

routerCause.get("/", CauseController.get);
routerCause.get("/:id", CauseController.getDetail);

routerCause.use("/", checkAuth, checkRoles(["admin"]));
routerCause.post("/", CauseController.create);
routerCause.delete("/:id", CauseController.delete);
routerCause.patch("/:id", CauseController.update);

export default routerCause;
