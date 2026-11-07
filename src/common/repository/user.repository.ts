import { IUser } from "../interface";
import { DatabaseRepository } from "./base.repository";
import { UserModel } from "../../model";

export class UserRepository extends DatabaseRepository<IUser> {
  constructor() {
    super(UserModel);
  }
}
