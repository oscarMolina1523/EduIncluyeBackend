import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";
import CategoryModel from "../models/CategoryModel";
import { generateId } from "../utils/GenerateId";

export default class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  getAllCategories = (req: Request, res: Response) => {
    const categories = this.service.getAllCategories();
    res.status(200).json(categories);
  };

  getCategoryById = (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const category = this.service.getCategoryById(categoryId);

    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  };

  addCategory = (req: Request, res: Response) => {
    const { name, description, video, image, isActive } = req.body;
    const id =generateId();

    // ✅ Crear instancia de CategoryModel para generar el id
    const newCategory = new CategoryModel(id, name, description, video, image, isActive);

    const result = this.service.addCategory(newCategory);

    if (result) {
      res.status(201).json({ message: "Category added correctly" });
    } else {
      res.status(400).json({ message: "Failed to add the category" });
    }
  };

  updateCategory = (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = this.service.updateCategory(id, data);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };

  deleteCategory = (req: Request, res: Response) => {
    const id = req.params.id;

    const result = this.service.deleteCategory(id);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };
}
