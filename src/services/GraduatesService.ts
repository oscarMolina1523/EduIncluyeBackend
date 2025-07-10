import { graduatesData } from "../data/GraduatesData";
import { GraduatesDTO } from "../dtos/GraduatesDTO";
import GraduatesModel from "../models/Graduates";
import { FirestoreCrudService } from "./FirestoreCrudService";

export default class GraduatesService {
  private service: FirestoreCrudService<GraduatesModel>;

  constructor() {
    this.service = new FirestoreCrudService<GraduatesModel>("graduates");
  }

  async getAllGraduates(): Promise<GraduatesModel[]> {
    return await this.service.getAll();
  }

  async getGraduateById(id: string):Promise<GraduatesModel | null> {
    return await this.service.getById(id);
  }

  async addGraduate(graduate: Omit<GraduatesModel, "id">) :Promise<GraduatesModel>{
    return await this.service.add(graduate);
  }

  async updateGraduate(id: string, graduate: GraduatesDTO):Promise<boolean> {
    return await this.service.update(id, graduate);
  }

  async deleteGraduate(id: string) :Promise<boolean>{
    return await this.service.delete(id);
  }
}
