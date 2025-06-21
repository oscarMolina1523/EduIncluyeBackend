import UserModel from "../models/UserModel";
import { GenericCrudService } from "./GenericCrudService";
import { userData } from "../data/UserData";

export default class UserService{
    private userService: GenericCrudService<UserModel>;
    constructor(){
        this.userService = new GenericCrudService<UserModel>(userData);
    }
}