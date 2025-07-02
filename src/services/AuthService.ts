import UserModel from "../models/UserModel";
import { userData } from "../data/UserData";

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
}
