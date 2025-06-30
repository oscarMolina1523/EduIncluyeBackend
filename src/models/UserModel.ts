import { BaseModel } from "./BaseModel";

export default class UserModel extends BaseModel{
    name: string;
    email: string;
    password: string;
    isActive: boolean;

    constructor(name: string, email: string, password: string, isActive: boolean = true) {
        super();
        this.name=name;
        this.email=email;
        this.password=password;
        this.isActive=isActive;
    }

}