import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";
import CategoryModel from "../models/CategoryModel";
import { generateId } from "../utils/GenerateId";

export default class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  getAllCategories = async (req: Request, res: Response) => {
    try {
      const categories = await this.service.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get categories" });
    }
  };

  getCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    try {
      const category = await this.service.getCategoryById(categoryId);

      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get category" });
    }
  };

  addCategory = async (req: Request, res: Response) => {
  const { name, description, video, image, isActive } = req.body;

  const newCategoryData = {
    name,
    description,
    video,
    image,
    isActive,
  };

  try {
    const createdCategory = await this.service.addCategory(newCategoryData);
    res.status(201).json({
      message: "Category added correctly",
      category: createdCategory,
    });
  } catch (error) {
    console.error("Add category error:", error);
    res.status(400).json({ message: "Failed to add the category" });
  }
};


  updateCategory = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    try {
      const success = await this.service.updateCategory(id, data);

      if (success) {
        res.status(200).json({ message: "Category updated successfully" });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to update category" });
    }
  };

  deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const result = await this.service.deleteCategory(id);

      if (result) {
        res.status(200).json({ message: "Category deleted successfully" });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to delete category" });
    }
  };
}
