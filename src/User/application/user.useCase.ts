import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";
import { UserOmitId, UserEntity } from "../domain/user.entity";

export class UserUseCase {
  constructor(private readonly userRepositoty: UserRepository) {}

  public registerUser = async (userData: UserOmitId) => {
    const newUser = new UserValue(userData);
    return await this.userRepositoty.registerUser(newUser);
  };
  public getDetailUser = async (id: UserEntity["id"]) => {
    return await this.userRepositoty.findUserById(id);
  };
  public deleteUser = async (id: UserEntity["id"]) => {
    return await this.userRepositoty.deleteUser(id);
  };
  public getAllUser = async () => {
    return await this.userRepositoty.getAllUser();
  };
  public updateUser = async (userDataUpdate: UserOmitId) => {
    return await this.userRepositoty.updateUser(userDataUpdate);
  };
}
