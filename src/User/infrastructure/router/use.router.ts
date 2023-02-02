import { Router } from "express";
import { UserUseCase } from "../../application/user.useCase";
import { SequilizeRepository } from "../repository/sequelize.repository";
import { UserController } from "../controller/user.ctrl";
const router = Router();

const useRepository = new SequilizeRepository();

const userUseCase = new UserUseCase(useRepository);

const userCtrl = new UserController(userUseCase);

router.get("/user/:id", userCtrl.getCtrl);
router.post("/user", userCtrl.insertCtrl);
router.get("/users", userCtrl.userListCtrl);
router.put("/user", userCtrl.updateCtrl);
router.delete('/user/:id',userCtrl.deleteUserCtrl)
export default router;
