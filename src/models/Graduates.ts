import BaseModel from "./BaseModel";

export default class Graduates extends BaseModel{
    name:string;
    description:string;
    image:string;
    constructor(id:string, name:string, description:string, image:string){
        super(id)
        this.name=name;
        this.description=description;
        this.image=image;
    }
}