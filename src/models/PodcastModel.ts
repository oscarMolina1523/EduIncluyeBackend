import BaseModel from "./BaseModel";

export default class PodcastModel extends BaseModel {
  name: string;
  description: string;
  video: string;
  audio: string;
  isActive: boolean;
  constructor(
    id: string,
    name: string,
    description: string,
    video: string,
    audio: string,
    isActive: boolean
  ) {
    super(id);
    this.name = name;
    this.description = description;
    this.video = video;
    this.audio = audio;
    this.isActive = isActive;
  }
}
