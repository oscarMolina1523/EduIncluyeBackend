import { categoryData } from "../data/CategoryData";
import { CategoryDTO } from "../dtos/CategoryDTO";
import CategoryModel from "../models/CategoryModel";
import { GenericCrudService } from "./GenericCrudService";

export default class ContentService {
  private service: GenericCrudService<CategoryModel>;

  constructor() {
    this.service = new GenericCrudService<CategoryModel>(categoryData);
  }

  getAllContent(): CategoryModel[] {
    return this.service.getAll();
  }

  getContentById(id: string) {
    return this.service.getById(id);
  }

  addContent(content: CategoryModel) {
    return this.service.add(content);
  }

  updateContent(id: string, content: CategoryDTO) {
    return this.service.update(id, content);
  }

  deleteContent(id: string) {
    return this.service.delete(id);
  }
}
