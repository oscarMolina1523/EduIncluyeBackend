import { Request, Response } from "express";
import GraduatesService from "../services/GraduatesService";
import GraduatesModel from "../models/Graduates";
import { generateId } from "../utils/GenerateId";

export default class GraduatesController {
  private service: GraduatesService;

  constructor() {
    this.service = new GraduatesService();
  }

  getAllGraduates = async (req: Request, res: Response) => {
    try {
      const graduates = await this.service.getAllGraduates();
      res.status(200).json(graduates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get graduates" });
    }
  };

  getGraduateById = async (req: Request, res: Response) => {
    const graduateId = req.params.id;
    try {
      const graduate = await this.service.getGraduateById(graduateId);
      res.status(200).json(graduate);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: "Graduate not found" });
    }
  };

  addGraduate = async (req: Request, res: Response) => {
    const { name, description, image } = req.body;
    const newGraduate = { name, description, image };
    try {
      const createdGraduate = await this.service.addGraduate(newGraduate);
      res
        .status(201)
        .json({
          message: "Graduate added correctly",
          graduate: createdGraduate,
        });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to add the graduate" });
    }
  };

  updateGraduate = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    try {
      await this.service.updateGraduate(id, data);
      res.status(200).json({ message: "Graduate updated" });
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: "Failed to update graduated"});
    }
  };

  deleteGraduate = async (req: Request, res: Response) => {
    const id = req.params.id;
    try{
      await this.service.deleteGraduate(id);

      res.status(200).json({ message: "Graduate deleted" });
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Failed to delete Graduate" });
    }
  };
}
