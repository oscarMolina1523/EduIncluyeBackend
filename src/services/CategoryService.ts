import { categoryData } from "../data/CategoryData";
import CategoryModel from "../models/CategoryModel";
import { GenericCrudService } from "./GenericCrudService";

export default class CategoryService{
    private categoryService: GenericCrudService<CategoryModel>;
    constructor(){
        this.categoryService= new GenericCrudService<CategoryModel>(categoryData);
    };

    getAllCategories():CategoryModel[]{
        return this.categoryService.getAll();
    }
}