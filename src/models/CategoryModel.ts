import BaseModel from "./BaseModel";

export default class CategoryModel extends BaseModel{
    name:string;
    description:string;
    video:string;
    image:string;
    isActive:boolean;
    constructor(id:string, name:string, description:string, video:string, image:string, isActive:boolean=true){
        super(id);
        this.name=name;
        this.description= description;
        this.video= video;
        this.image= image;
        this.isActive= isActive;
    }
}