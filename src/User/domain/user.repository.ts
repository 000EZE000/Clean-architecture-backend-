import { UserEntity, UserOmitId } from "./user.entity";

type resultMetody = Promise<UserEntity | null>;

export interface UserRepository {
  findUserById(id: UserEntity["id"]): resultMetody;
  registerUser(newUser: UserEntity): resultMetody;
  getAllUser(): Promise<UserEntity[]> | null;
  updateUser(dataUpdate: UserOmitId): Promise<string>;
  deleteUser(id: UserEntity["id"]): Promise<boolean>;
}
