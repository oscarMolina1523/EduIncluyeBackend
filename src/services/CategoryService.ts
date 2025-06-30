import { categoryData } from "../data/CategoryData";
import {CategoryDTO} from "../dtos/CategoryDTO";
import CategoryModel from "../models/CategoryModel";
import { GenericCrudService } from "./GenericCrudService";

export default class CategoryService {
  private categoryService: GenericCrudService<CategoryModel>;

  constructor() {
    this.categoryService = new GenericCrudService<CategoryModel>(categoryData);
  }

  getAllCategories(): CategoryModel[] {
    return this.categoryService.getAll();
  }

  getCategoryById(id: string) {
    return this.categoryService.getById(id);
  }

  addCategory(category: CategoryModel) {
    return this.categoryService.add(category);
  }

  updateCategory(id: string, category: CategoryDTO) {
    return this.categoryService.update(id, category);
  }

  deleteCategory(id: string) {
    return this.categoryService.delete(id);
  }
}
