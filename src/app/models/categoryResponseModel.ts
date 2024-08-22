import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponse extends ResponseModel { 
    data: Category[];
}