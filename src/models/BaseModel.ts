import { generateId } from "../utils/GenerateId";

export class BaseModel{
    id: string;

    constructor(){
        this.id = generateId();
    }
}