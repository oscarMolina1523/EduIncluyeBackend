import { Request, Response } from "express";
import PodcastService from "../services/PodcastService";
import PodcastModel from "../models/PodcastModel";
import { generateId } from "../utils/GenerateId";

export default class PodcastController {
  private service: PodcastService;

  constructor() {
    this.service = new PodcastService();
  }

  getAllPodcasts = (req: Request, res: Response) => {
    const podcasts = this.service.getAllPodcasts();
    res.status(200).json(podcasts);
  };

  getPodcastById = (req: Request, res: Response) => {
    const podcastId = req.params.id;
    const podcast = this.service.getPodcastById(podcastId);

    if (podcast) {
      res.status(200).json(podcast);
    } else {
      res.status(404).json({ message: "Podcast not found" });
    }
  };

  addPodcast = (req: Request, res: Response) => {
    const { name, description, video, audio, isActive } = req.body;
    const id = generateId();

    // ✅ Crear instancia de PodcastModel para generar el id
    const newPodcast = new PodcastModel(id, name, description, video, audio, isActive);

    const result = this.service.addPodcast(newPodcast);

    if (result) {
      res.status(201).json({ message: "Podcast added correctly" });
    } else {
      res.status(400).json({ message: "Failed to add the podcast" });
    }
  };

  updatePodcast = (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = this.service.updatePodcast(id, data);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };

  deletePodcast = (req: Request, res: Response) => {
    const id = req.params.id;

    const result = this.service.deletePodcast(id);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(404).json({ message: result.message });
    }
  };
}
