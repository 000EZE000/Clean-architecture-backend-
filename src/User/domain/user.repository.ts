import { UserEntity, UserOmitId } from "./user.entity";

type resultMetody = Promise<UserEntity> | null;

export interface UserRepository {
  findUserById(id: UserEntity["id"]): resultMetody;
  registerUser(newUser: UserEntity): resultMetody;
  listeUser(): Promise<UserEntity[]> | null;
  updateUser(dataUpdate: UserOmitId): resultMetody;
  deleteUser(id: UserEntity["id"]): Promise<true> | false;
}
