import { UserOmitId, UserEntity } from "@src/User/domain/user.entity";
import { User } from "../db/sequilize/models/User.model";

export class SequilizeRepository {
  async findUserById(id: UserEntity["id"]) {
    return await User.findByPk(id);
  }
  async registerUser(newUser: UserEntity) {
    const user = User.build(newUser);
    user.password = await User.encryptPassword(user.password);
    await user.save();
    return user;
  }
  async listUsers() {
    return await User.findAll();
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
        email,
        description,
        phoneNumber,
        password,
      },
      { where: { email } },
    );
    console.log({ user });
    return user;
  }
}
