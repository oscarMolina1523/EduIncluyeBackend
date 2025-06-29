import UserModel from "../models/UserModel";
import { GenericCrudService } from "./GenericCrudService";
import { userData } from "../data/UserData";
import { UserDTO } from "../dtos/UserDTO";

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

  addUser(user: UserModel) {
    return this.userService.add(user);
  }

  updateUser(id: string, user: UserDTO) {
    return this.userService.update(id, user);
  }

  deleteUser(id: string){
    return this.userService.delete(id);
  }
}
