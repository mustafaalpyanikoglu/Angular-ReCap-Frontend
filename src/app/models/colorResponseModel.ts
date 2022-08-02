import { Color } from "./color";
import { ResponseModel } from "./reponseModel";

export interface ColorResponseModel extends ResponseModel
{
    data:Color[]
}