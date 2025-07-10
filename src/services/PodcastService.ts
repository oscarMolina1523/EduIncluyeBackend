import { podcastData } from "../data/podcastData";
import { PodcastDTO } from "../dtos/PodcastDTO";
import PodcastModel from "../models/PodcastModel";
import { FirestoreCrudService } from "./FirestoreCrudService";
import { GenericCrudService } from "./GenericCrudService";

export default class PodcastService {
  private podcastService: FirestoreCrudService<PodcastModel>;

  constructor() {
    this.podcastService = new FirestoreCrudService<PodcastModel>("podcast");
  }

  async getAllPodcasts(): Promise<PodcastModel[]> {
    return await this.podcastService.getAll();
  }

  async getPodcastById(id: string):Promise<PodcastModel | null> {
    return await this.podcastService.getById(id);
  }

  async addPodcast(podcast: PodcastModel):Promise<PodcastModel> {
    return await this.podcastService.add(podcast);
  }

  async updatePodcast(id: string, podcast: PodcastDTO) :Promise<boolean>{
    return await this.podcastService.update(id, podcast);
  }

  async deletePodcast(id: string) :Promise<boolean>{
    return await this.podcastService.delete(id);
  }
}
