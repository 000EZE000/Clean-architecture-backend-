import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
  name: string;
  email: string;
  phoneNumber: number;
  description: string;
  id: string;

  constructor({
    name,
    email,
    phoneNumber,
    description,
  }: {
    name: string;
    email: string;
    phoneNumber: number;
    description: string;
  }) {
    (this.name = name),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.description = description),
      (this.id = uuid());
  }
}
