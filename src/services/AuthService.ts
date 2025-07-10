import UserModel from "../models/UserModel";
import { userData } from "../data/UserData";
import { generateId } from "../utils/GenerateId";

export default class AuthService {
  private users: UserModel[];

  constructor() {
    this.users = userData;
  }

  findByUsername(username: string): UserModel | undefined {
    return this.users.find((user) => user.name === username);
  }

  findByEmail(email: string): UserModel | undefined {
    return this.users.find(user => user.email === email);
  }

  validateUsernameAndPassword(username: string, password: string): boolean {
    const user = this.findByUsername(username);
    if (!user) return false;
    return user.password === password;
  }

  validateEmailAndPassword(email: string, password: string): boolean {
    const user = this.findByEmail(email);
    if (!user) return false;
    return user.password === password;
  }

  register(name: string, email: string, password: string, image:string): UserModel | null {
    const exists = this.findByEmail(email);
    if (exists) {
      return null; // ya existe un usuario con ese email
    }

    const id = generateId();
    const newUser = new UserModel(id, name, email, password,image, true);

    this.users.push(newUser);
    return newUser;
  }
}
