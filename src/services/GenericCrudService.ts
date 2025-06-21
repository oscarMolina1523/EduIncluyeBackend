import { BaseModel } from "../models/BaseModel";

//first receive a generic type T that extends BaseModel
export class GenericCrudService<T extends BaseModel> {
  //data of type T in an array
  private data: T[];

  //constructor that initializes the data array
  //if no initial data is provided, it defaults to an empty array
  constructor(initialData: T[] = []) {
    this.data = initialData;
  }

  //this method return the array of data
  //it is used to get all the data
  getAll():T[]{
    return this.data;
  }

  //this method recieves an id and send the specific item
  //if the item is not found, it throws an error
  getById(id: string): T | undefined {
    const item= this.data.find((item) => item.id ==id);
    if (!item) {
    throw new Error(`Entity with id ${id} not found`);
    }
    return item;
  }

  //this method receives an item of type T and adds in the existing data array
  add(item: T): boolean{
    try{
      this.data.push(item);
      return true;
    }catch{
      return false;
    }
  }

  //this method receives an id and data to update the existing item
  update(id: string, updatedData: Partial <T>):{ success: boolean; message: string }{
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      // Merge the existing item with the updated data
      //only change the properties that are provided in updatedData
      this.data[index] = { ...this.data[index], ...updatedData };
      return { success: true, message: "Entity updated successfully" };
    }
    return { success: false, message: `Entity with id ${id} not found` };
  }

  //this method receives an id and search in the array by index , if index exists, it deletes the item
  delete(id: string): { success: boolean; message: string } {
    const item = this.data.findIndex((item) => item.id === id);
    if(item !== -1) {
      this.data.splice(item, 1);
      return { success: true, message: "Entity deleted successfully" };
    }else {
    return {
      success: false,
      message: `Entity with id ${id} not found`,
    };
  }
  }
}