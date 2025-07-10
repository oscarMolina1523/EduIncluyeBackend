import UserModel from "../models/UserModel";
import UserService from "../services/UserService";
import { Response, Request } from "express";
import { generateId } from "../utils/GenerateId";

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.service.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get users" });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try{
      const user = await this.service.getUserById(userId);
      res.status(200).json(user);
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "User not found" });
    }
  };

  addUser = async (req: Request, res: Response) => {
    const { name, email, password,image,  isActive } = req.body;
    const newUser = {name, email, password, image, isActive};
    try{
      const createdUser = await this.service.addUser(newUser);
      res.status(201).json({ message: "User added correctly", user: createdUser });
    }catch(error){
      console.error(error);
      res.status(400).json({ message: "failed to add the user" });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    try{
      await this.service.updateUser(id, data);
      res.status(200).json({message:"User updated successfully"});
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Failed to update user" });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    try{
      await this.service.deleteUser(id);
      res.status(200).json({ message: "User deleted" });

    }catch(error){
      res.status(404).json({ message: "Failed to delete the user" });
    }
  };
}
