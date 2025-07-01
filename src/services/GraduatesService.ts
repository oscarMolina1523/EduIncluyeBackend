import { graduatesData } from "../data/GraduatesData";
import { GraduatesDTO } from "../dtos/GraduatesDTO";
import GraduatesModel from "../models/Graduates";
import { GenericCrudService } from "./GenericCrudService";

export default class GraduatesService {
  private service: GenericCrudService<GraduatesModel>;

  constructor() {
    this.service = new GenericCrudService<GraduatesModel>(graduatesData);
  }

  getAllGraduates(): GraduatesModel[] {
    return this.service.getAll();
  }

  getGraduateById(id: string) {
    return this.service.getById(id);
  }

  addGraduate(graduate: GraduatesModel) {
    return this.service.add(graduate);
  }

  updateGraduate(id: string, graduate: GraduatesDTO) {
    return this.service.update(id, graduate);
  }

  deleteGraduate(id: string) {
    return this.service.delete(id);
  }
}
