import { UserUseCase } from "@application/user.useCase";
import { RequerstInterface, ResponseInterface } from "./@types/interfaces.ctrl";
import { Tools } from "@infrastructure/validations/user.validations";

interface error {
  msg: string;
}

export class UserController {
  constructor(private userUseCase: UserUseCase) {}
  public getCtrl = async (
    { params }: RequerstInterface,
    res: ResponseInterface,
  ) => {
    try {
      const { id } = params;
      if (Tools.isNotSting(id))
        return res.status(400).json({ msg: "the id should be a string" });
      const user = await this.userUseCase.getDetailUser(id);
      return user
        ? res.status(200).json(user)
        : res.status(404).json({ msg: "user not found" });
    } catch (error: any) {
      return res.status(500).send({ msg: `${error.msg}` });
    }
  };

  public insertCtrl = async (
    { body }: RequerstInterface,
    res: ResponseInterface,
  ) => {
    try {
      if (Tools.isNotUser(body))
        return res.status(400).json({ msg: "User data is incorrect" });
      const newUser = await this.userUseCase.registerUser(body);
      return newUser
        ? res.status(201).json(newUser)
        : res.status(500).json({ msg: "error creating user" });
    } catch (error: any) {
      return res.status(500).send({ msg: `${error.msg}` });
    }
  };

  public updateCtrl = async (
    { body }: RequerstInterface,
    res: ResponseInterface,
  ) => {
    try {
      if (Tools.isNotUser(body))
        return res.status(400).json({ msg: "User data is incorrect" });
      const newUser = await this.userUseCase.updateUser(body);
      return newUser
        ? res.status(201).json(newUser)
        : res.status(500).json({ msg: "failed to update user" });
    } catch (error: any) {
      return res.status(500).send({ msg: `${error.msg}` });
    }
  };

  public userListCtrl = async (
    _req: ResponseInterface,
    res: ResponseInterface,
  ) => {
    try {
      const users = await this.userUseCase.getAllUser();
      return users
        ? res.status(200).json(users)
        : res.status(404).json({ msg: "no users found" });
    } catch (error: any) {
      return res.status(500).send({ msg: `${error.msg}` });
    }
  };

  public deleteUserCtrl = async (
    { params }: RequerstInterface,
    res: ResponseInterface,
  ) => {
    try {
      const { id } = params;
      if (Tools.isNotSting(id))
        return res.status(400).json({ msg: "the id should be a string" });
      const deleteUser = await this.userUseCase.deleteUser(id);
      return deleteUser
        ? res.status(200).json(deleteUser)
        : res.status(404).json({ msg: "user not found" });
    } catch (error: any) {
      return res.status(500).send({ msg: `${error.msg}` });
    }
  };
}
