import { UserOmitId, UserEntity } from "@src/User/domain/user.entity";
import { User } from "../db/sequilize/models/User.model";

export class SequilizeRepository {
  async findUserById(id: UserEntity["id"]) {
    const user: UserEntity | null = await User.findByPk(id);
    return user;
  }

  async registerUser(newUser: UserEntity) {
    const sequelizeUser = User.build(newUser);
    sequelizeUser.password = await User.encryptPassword(sequelizeUser.password);
    const user: UserEntity = await sequelizeUser.save();
    return user;
  }
  async getAllUser() {
    const user: UserEntity[] = await User.findAll();
    return user;
  }
  async deleteUser(id: UserEntity["id"]) {
    const user = await User.destroy({ where: { id } });
    return Boolean(user);
  }
  async updateUser({
    name,
    email,
    description,
    phoneNumber,
    password: pass,
  }: UserOmitId) {
    const password = await User.encryptPassword(pass);
    const user = await User.update(
      {
        name,
        description,
        phoneNumber,
        password,
      },
      { where: { email } },
    );
    console.log({ user });
    return `${user}`;
  }
}
