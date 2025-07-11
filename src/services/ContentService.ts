import { ContentDTO } from "../dtos/ContentDTO";
import ContentModel from "../models/ContentModel";
import { FirestoreCrudService } from "./FirestoreCrudService";

export default class ContentService {
  private service: FirestoreCrudService<ContentModel>;

  constructor() {
    this.service = new FirestoreCrudService<ContentModel>("content");
  }

  async getAllContent(): Promise<ContentModel[]> {
    return await this.service.getAll();
  }

  async getContentById(id: string): Promise<ContentModel | null> {
    return await this.service.getById(id);
  }

  async addContent(content: Omit<ContentModel, "id">): Promise<ContentModel> {
    return await this.service.add(content);
  }

  async updateContent(id: string, content: ContentDTO): Promise<boolean> {
    return await this.service.update(id, content);
  }

  async deleteContent(id: string): Promise<boolean> {
    return await this.service.delete(id);
  }

  async getContentByCategoriaPaginated(
    idCategoria: string,
    page: number = 1,
    pageSize: number = 10
  ): Promise<ContentModel[]> {
    // 1. Espera la data de Firestore
const allContents = await this.service.getAll();

// 2. Filtra por categoría
const filtered = allContents.filter(
  (content) => content.idCategory === idCategoria
);

// 3. Ordena alfabéticamente por nombre (o campo deseado)
const ordered = filtered.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  return nameA.localeCompare(nameB, "es", { sensitivity: "base" });
});

// 4. Calcula el rango de paginación
const startIndex = (page - 1) * pageSize;
const endIndex = startIndex + pageSize;

// 5. Retorna la página ordenada
return ordered.slice(startIndex, endIndex);

  }
}
