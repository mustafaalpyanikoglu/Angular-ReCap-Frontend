import { Brand } from "./brand";
import { ResponseModel } from "./reponseModel";

export interface BrandResponseModel extends ResponseModel
{
    data:Brand[]
}