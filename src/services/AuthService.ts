import UserModel from "../models/UserModel";
import { userData } from "../data/UserData";
import { generateId } from "../utils/GenerateId";
import UserService from "./UserService";

export default class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async findByUsername(username: string): Promise<UserModel | null> {
    const users = await this.userService.getAllUsers();
    const user = users.find((u) => u.name === username);
    return user || null;
  }

  async findByEmail(email: string): Promise< UserModel | null> {
    const users = await this.userService.getAllUsers();
    const user = users.find(u => u.email === email);
    return user || null;
  }

  async validateUsernameAndPassword(username: string, password: string):Promise<boolean> {
    const user = await this.findByUsername(username);
    if (!user) return false;
    return user.password === password;
  }

  async validateEmailAndPassword(email: string, password: string): Promise<boolean>{
    const user = await this.findByEmail(email);
    if (!user) return false;
    return user.password === password;
  }

  async register(
    name: string,
    email: string,
    password: string,
    image?: string
  ): Promise<UserModel | null>{

    const exists = await this.findByEmail(email);

    if (exists) {
      return null; // ya existe un usuario con ese email
    }

    const defaultImage = "https://cdn-icons-png.flaticon.com/512/3135/3135823.png";

    const newUser: Omit<UserModel, "id"> = {
      name,
      email,
      password,
      image: image || defaultImage,
      isActive: true,
    };

    const createdUser = await this.userService.addUser(newUser);
    return createdUser;
  }
}
