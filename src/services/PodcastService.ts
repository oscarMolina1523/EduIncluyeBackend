import { podcastData } from "../data/podcastData";
import { PodcastDTO } from "../dtos/PodcastDTO";
import PodcastModel from "../models/PodcastModel";
import { GenericCrudService } from "./GenericCrudService";

export default class PodcastService {
  private podcastService: GenericCrudService<PodcastModel>;

  constructor() {
    this.podcastService = new GenericCrudService<PodcastModel>(podcastData);
  }

  getAllPodcasts(): PodcastModel[] {
    return this.podcastService.getAll();
  }

  getPodcastById(id: string) {
    return this.podcastService.getById(id);
  }

  addPodcast(podcast: PodcastModel) {
    return this.podcastService.add(podcast);
  }

  updatePodcast(id: string, podcast: PodcastDTO) {
    return this.podcastService.update(id, podcast);
  }

  deletePodcast(id: string) {
    return this.podcastService.delete(id);
  }
}
