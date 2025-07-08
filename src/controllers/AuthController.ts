import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { generateAccesToken } from "../utils/jwtUtils";

export default class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    const isValid = this.authService.validateEmailAndPassword(email, password);

    if (!isValid) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const user = this.authService.findByEmail(email);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const token = generateAccesToken({ id: user.id, email: user.email , name: user.name, isActive: user.isActive});

    res.status(200).json(token);
  };

  loginWithUsername = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: "Username and password are required" });
      return
    }

    const isValid = this.authService.validateUsernameAndPassword(
      username,
      password
    );

    if (!isValid) {
      res.status(401).json({ message: "Invalid username or password" });
      return 
    }

    const user = this.authService.findByUsername(username);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return
    }

    const token = generateAccesToken({ id: user.id, email: user.email , name: user.name, isActive: user.isActive});

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  };

  register = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: "Name, email, and password are required" });
      return 
    }

    const newUser = this.authService.register(name, email, password);

    if (!newUser) {
      res
        .status(409)
        .json({ message: "User with this email already exists" });
      return 
    }

    const token = generateAccesToken({ id: newUser.id, email: newUser.email, name: newUser.name, isActive: newUser.isActive });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  };
}
