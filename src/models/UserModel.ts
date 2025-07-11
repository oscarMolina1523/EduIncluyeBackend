import BaseModel  from "./BaseModel";

export default class UserModel extends BaseModel{
    name: string;
    email: string;
    password: string;
    image:string;
    isActive: boolean;

    constructor(id:string, name: string, email: string, password: string,image:string, isActive: boolean = true) {
        super(id);
        this.name=name;
        this.email=email;
        this.password=password;
        this.image=image;
        this.isActive=isActive;
    }

}