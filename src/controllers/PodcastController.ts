import { Request, Response } from "express";
import PodcastService from "../services/PodcastService";
import PodcastModel from "../models/PodcastModel";
import { generateId } from "../utils/GenerateId";

export default class PodcastController {
  private service: PodcastService;

  constructor() {
    this.service = new PodcastService();
  }

  getAllPodcasts = async (req: Request, res: Response) => {
    try{
      const podcasts = await this.service.getAllPodcasts();
      res.status(200).json(podcasts);
    }catch(error){
      console.error(error);
      res.status(500).json({message: "Failed to get podcast data"});
    }
  };

  getPodcastById = async (req: Request, res: Response) => {
    const podcastId = req.params.id;

    try{
      const podcast = await this.service.getPodcastById(podcastId);
      res.status(200).json(podcast);
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Podcast not found" });
    }
  };

  addPodcast = async (req: Request, res: Response) => {
    const { name, description, video, audio, isActive } = req.body;

    const newPodcast = {name, description, video, audio, isActive};
    try{
      const createdPodcast = await this.service.addPodcast(newPodcast);
      res.status(201).json({ message: "Podcast added correctly", podcast: createdPodcast });

    }catch(error){
      console.error(error);
      res.status(400).json({ message: "Failed to add the podcast" });
    }
  };

  updatePodcast = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    try{
      await this.service.updatePodcast(id, data);
      res.status(200).json({ message: "Podcast updated correctly" });
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "result.message" });
    }
  };

  deletePodcast = async (req: Request, res: Response) => {
    const id = req.params.id;
    try{
      await this.service.deletePodcast(id);
      res.status(200).json({ message: "Podcast deleted" });
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Failed to delete the podcast" });
    }
  };
}
