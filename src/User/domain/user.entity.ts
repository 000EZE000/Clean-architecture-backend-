export interface UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  description: string;
}

export type UserOmitId = Omit<UserEntity, "id">;
