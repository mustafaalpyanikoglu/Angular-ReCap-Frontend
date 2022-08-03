import { Customer } from "./customer";
import { ResponseModel } from "./reponseModel";

export interface CustomerResponseModel extends ResponseModel
{
    data:Customer[]
}