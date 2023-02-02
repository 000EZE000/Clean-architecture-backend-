import { v4 as uuid } from "uuid";
import { UserEntity, UserOmitId } from "./user.entity";

export class UserValue implements UserEntity {
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
  id: string;
  password: string;

  constructor({ name, email, phoneNumber, description, password }: UserOmitId) {
    (this.name = name),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.description = description),
      (this.id = uuid()),
      (this.password = password);
  }
}
