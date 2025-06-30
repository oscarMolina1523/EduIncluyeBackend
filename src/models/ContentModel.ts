import BaseModel from "./BaseModel";

export default class ContentModel extends BaseModel{

    name:string;
    description:string;
    video:string;
    audio:string;
    isActive:boolean;
    idCategory:string;

    constructor(id:string, name:string, description:string, video:string, audio:string, isActive:boolean, idCategory:string){
        super(id);
        this.name=name;
        this.description=description;
        this.video=video;
        this.audio=audio;
        this.isActive=isActive;
        this.idCategory=idCategory;
    }
}