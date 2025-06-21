import UserModel from "../models/UserModel";
import { GenericCrudService } from "./GenericCrudService";
import { userData } from "../data/UserData";

export default class UserService {
  private userService: GenericCrudService<UserModel>;
  constructor() {
    this.userService = new GenericCrudService<UserModel>(userData);
  }

  getAllUsers(): UserModel[] {
    return this.userService.getAll();
  }

  getUserById(id: string) {
    return this.userService.getById(id);
  }
}
