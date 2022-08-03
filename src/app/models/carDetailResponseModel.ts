import { CarDetail } from "./carDetail";
import { ResponseModel } from "./reponseModel";

export interface CarDetailResponseModel extends ResponseModel
{
    data:CarDetail[]
}