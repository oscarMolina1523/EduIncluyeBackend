import { Request, Response } from "express";
import GraduatesService from "../services/GraduatesService";
import GraduatesModel from "../models/Graduates";
import { generateId } from "../utils/GenerateId";

export default class GraduatesController {
  private service: GraduatesService;

  constructor() {
    this.service = new GraduatesService();
  }

  getAllGraduates = (req: Request, res: Response) => {
    const graduates = this.service.getAllGraduates();
    res.status(200).json(graduates);
  };

  getGraduateById = (req: Request, res: Response) => {
    const graduateId = req.params.id;
    const graduate = this.service.getGraduateById(graduateId);

    if (graduate) {
      res.status(200).json(graduate);
    } else {
      res.status(404).json({ message: "Graduate not found" });
    }
  };

  addGraduate = (req: Request, res: Response) => {
    const { name, description, image } = req.body;
    const id = generateId();

    // ✅ Crear instancia de GraduatesModel para generar el id
    const newGraduate = new GraduatesModel(id, name, description, image);

    const result = this.service.addGraduate(newGraduate);

    if (result) {
      res.status(201).json({ message: "Graduate added correctly" });
    } else {
      res.status(400).json({ message: "Failed to add the graduate" });
    }
  };

  updateGraduate = (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = this.service.updateGraduate(id, data);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };

  deleteGraduate = (req: Request, res: Response) => {
    const id = req.params.id;

    const result = this.service.deleteGraduate(id);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };
}
