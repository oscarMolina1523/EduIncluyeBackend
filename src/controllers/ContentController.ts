import { Request, Response } from "express";
import ContentService from "../services/ContentService";
import { generateId } from "../utils/GenerateId";
import ContentModel from "../models/ContentModel";

export default class ContentController {
  private service: ContentService;

  constructor() {
    this.service = new ContentService();
  }

  getAllContent = (req: Request, res: Response) => {
    const content = this.service.getAllContent();
    res.status(200).json(content);
  };

  getContentById = (req: Request, res: Response) => {
    const contentId = req.params.id;
    const content = this.service.getContentById(contentId);

    if (content) {
      res.status(200).json(content);
    } else {
      res.status(404).json({ message: "Content not found" });
    }
  };

  addContent = (req: Request, res: Response) => {
    const { name, description, video, audio, isActive, idCategory } = req.body;
    const id = generateId();

    // ✅ Crear instancia de CategoryModel (usado como ContentModel)
    const newContent = new ContentModel(id, name, description, video, audio, isActive, idCategory);

    const result = this.service.addContent(newContent);

    if (result) {
      res.status(201).json({ message: "Content added correctly" });
    } else {
      res.status(400).json({ message: "Failed to add the content" });
    }
  };

  updateContent = (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = this.service.updateContent(id, data);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };

  deleteContent = (req: Request, res: Response) => {
    const id = req.params.id;

    const result = this.service.deleteContent(id);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };
}
