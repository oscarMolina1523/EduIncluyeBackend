import { Request, Response } from "express";
import ContentService from "../services/ContentService";

export default class ContentController {
  private service: ContentService;

  constructor() {
    this.service = new ContentService();
  }

  getAllContent = async (req: Request, res: Response) => {
    try {
      const content = await this.service.getAllContent();
      res.status(200).json(content);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get content" });
    }
  };

  getContentById = async (req: Request, res: Response) => {
    const contentId = req.params.id;
    try {
      const content = await this.service.getContentById(contentId);
      res.status(200).json(content);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: "Content not found" });
    }
  };

  addContent = async (req: Request, res: Response) => {
    const { name, description, video, audio, isActive, idCategory } = req.body;

    const newContent = {
      name,
      description,
      video,
      audio,
      isActive,
      idCategory,
    };
    try {
      const createdContent = await this.service.addContent(newContent);
      res
        .status(201)
        .json({ message: "Content added correctly", content: createdContent });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to add the content" });
    }
  };

  updateContent = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    try{
      await this.service.updateContent(id, data);
      res.status(200).json({ message: "Content Updated" });
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Failed to update content"});
    }
  };

  deleteContent = async (req: Request, res: Response) => {
    const id = req.params.id;
    try{
      await this.service.deleteContent(id);
      res.status(200).json({ message: "Content Deleted successfull" });
    }catch(error){
      console.error(error);
      res.status(404).json({ message: "Failed to delete content"});
    }
  };

  getContentByCategoryPaginated = async (req: Request, res: Response) => {
    const { idCategoria, page = 1, pageSize = 10 } = req.body;

    if (!idCategoria) {
      res.status(400).json({ message: "idCategoria is required" });
      return;
    }

    try{
      const contents = await this.service.getContentByCategoriaPaginated(
        idCategoria,
        page,
        pageSize
      );
      
      res.status(200).json(contents);
    }catch(error){
      console.error(error);
      res.status(404).json({message: "content not found"})
    }
  };
}
