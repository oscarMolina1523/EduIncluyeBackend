import UserModel from "../models/UserModel";
import { GenericCrudService } from "./GenericCrudService";
import { userData } from "../data/UserData";
import { UserDTO } from "../dtos/UserDTO";
import { FirestoreCrudService } from "./FirestoreCrudService";

export default class UserService {
  private userService: FirestoreCrudService<UserModel>;
  constructor() {
    this.userService = new FirestoreCrudService<UserModel>("users");
  }

  async getAllUsers(): Promise<UserModel[]> {
    return await this.userService.getAll();
  }

  async getUserById(id: string):Promise<UserModel | null> {
    return await this.userService.getById(id);
  }

  async addUser(user: Omit<UserModel, "id">):Promise<UserModel> {
    return await this.userService.add(user);
  }

  async updateUser(id: string, user: UserDTO) :Promise<boolean>{
    return await this.userService.update(id, user);
  }

  async deleteUser(id: string):Promise<boolean>{
    return await this.userService.delete(id);
  }
}
