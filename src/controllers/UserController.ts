import UserModel from "../models/UserModel";
import UserService from "../services/UserService";
import { Response, Request } from "express";

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  getAllUsers = (req: Request, res: Response) => {
    const users = this.service.getAllUsers();
    res.status(200).json(users);
  };

  getUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = this.service.getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };

  addUser = (req: Request, res: Response) => {
    const { name, email, password, isActive } = req.body;

    // ✅ Crear la instancia de UserModel para que se genere el id
    const newUser = new UserModel(name, email, password, isActive ?? true);

    const result = this.service.addUser(newUser);

    if (result) {
      res.status(201).json({ message: "User added correctly" });
    } else {
      res.status(400).json({ message: "failed to add the user" });
    }
  };

  updateUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = this.service.updateUser(id, data);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };

  deleteUser = (req: Request, res: Response) => {
    const id = req.params.id;

    const result = this.service.deleteUser(id);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };
}
