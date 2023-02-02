import { Request, Response } from "express";
import { UserEntity, UserOmitId } from "@domain/user.entity";

interface Id {
  id: UserEntity["id"];
}

export interface RequerstInterface extends Request {
  params: Id;
  body: UserEntity | UserOmitId;
}

export type ResponseInterface = Response<
  UserEntity | { msg: string } | UserEntity[] | boolean
>;
