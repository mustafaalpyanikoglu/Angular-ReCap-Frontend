import { ResponseModel } from "./reponseModel";

export interface listResponseModel<T> extends ResponseModel
{
    data:T[];
}