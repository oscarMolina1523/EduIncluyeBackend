import {CategoryDTO} from "../dtos/CategoryDTO";
import CategoryModel from "../models/CategoryModel";
import { FirestoreCrudService } from "./FirestoreCrudService";
export default class CategoryService {
  private categoryService: FirestoreCrudService<CategoryModel>;

  constructor() {
    this.categoryService = new FirestoreCrudService<CategoryModel>("category");
  }

  async getAllCategories(): Promise<CategoryModel[]> {
    return await this.categoryService.getAll();
  }

  async getCategoryById(id: string):Promise<CategoryModel | null> {
    return await this.categoryService.getById(id);
  }

  async addCategory(category: Omit<CategoryModel, "id">): Promise<CategoryModel>{
    return await this.categoryService.add(category);
  }

  async updateCategory(id: string, category: CategoryDTO): Promise<boolean> {
    return await this.categoryService.update(id, category);
  }

  async deleteCategory(id: string): Promise<boolean>{
    return await this.categoryService.delete(id);
  }
}

// 💡 Resumen rápido de que devuelve cada metodo de firestore
// Método	-->Acción-->	Retorno esperado
// getAll	-->Obtener todos	CategoryModel[] -->(array de objetos)
// getById	-->Obtener uno	-->CategoryModel
// add	-->Crear uno nuevo-->	string (ID generado)
// update	-->Actualizar uno	-->boolean (éxito o no)
// delete	-->Eliminar uno	-->boolean (éxito o no)
