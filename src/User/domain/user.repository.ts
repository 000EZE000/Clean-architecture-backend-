import { UserEntity } from "./user.entity";

type resultMetody = Promise<UserEntity> | null;

export interface UserRepository {
  findUserById(id: UserEntity["id"]): resultMetody;
  registerUser(newUser: UserEntity): resultMetody;
  listeUser(): Promise<UserEntity[]> | null;
  updateUser(dataUpdate: UserEntity): resultMetody;
  deleteUser(id: UserEntity["id"]): Promise<true> | false;
}
