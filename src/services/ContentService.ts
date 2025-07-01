import { contentData } from "../data/contentData";
import { ContentDTO } from "../dtos/ContentDTO";
import ContentModel from "../models/ContentModel";
import { GenericCrudService } from "./GenericCrudService";

export default class ContentService {
  private service: GenericCrudService<ContentModel>;

  constructor() {
    this.service = new GenericCrudService<ContentModel>(contentData);
  }

  getAllContent(): ContentModel[] {
    return this.service.getAll();
  }

  getContentById(id: string) {
    return this.service.getById(id);
  }

  addContent(content: ContentModel) {
    return this.service.add(content);
  }

  updateContent(id: string, content: ContentDTO) {
    return this.service.update(id, content);
  }

  deleteContent(id: string) {
    return this.service.delete(id);
  }
}
