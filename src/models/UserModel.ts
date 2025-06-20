import { generateId } from "../utils/GenerateId";

export default class UserModel{
    id?: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;

    constructor(name: string, email: string, password: string, isActive: boolean = true) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.isActive=isActive;
        this.id = generateId(); 
    }

}