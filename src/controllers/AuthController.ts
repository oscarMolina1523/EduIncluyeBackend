import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { generateAccesToken } from "../utils/jwtUtils";

export default class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
     res.status(400).json({ message: "Email and password are required" });
     return;
    }

    try {
      const isValid = await this.authService.validateEmailAndPassword(email, password);

      if (!isValid) {
       res.status(401).json({ message: "Invalid email or password" });
       return;
      }

      const user = await this.authService.findByEmail(email);
      if (!user) {
       res.status(404).json({ message: "User not found" });
       return;
      }

      const token = generateAccesToken({
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        isActive: user.isActive
      });

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      });
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  loginWithUsername = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
     res.status(400).json({ message: "Username and password are required" });
     return;
    }

    try {
      const isValid = await this.authService.validateUsernameAndPassword(username, password);

      if (!isValid) {
       res.status(401).json({ message: "Invalid username or password" });
       return;
      }

      const user = await this.authService.findByUsername(username);
      if (!user) {
       res.status(404).json({ message: "User not found" });
       return;
      }

      const token = generateAccesToken({
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        isActive: user.isActive
      });

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      });
    } catch (error) {
      console.error("Error in loginWithUsername:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  register = async (req: Request, res: Response) => {
    const { name, email, password, image } = req.body;

    if (!name || !email || !password) {
     res.status(400).json({ message: "Name, email,image and password are required" });
     return;
    }

    try {
      const newUser = await this.authService.register(name, email, password, image);

      if (!newUser) {
       res.status(409).json({ message: "User with this email already exists" });
       return;
      }

      const token = generateAccesToken({
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        image:newUser.image,
        isActive: newUser.isActive
      });

      res.status(201).json({
        message: "User registered successfully",
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          image:newUser.image,
        },
      });
    } catch (error) {
      console.error("Error in register:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
