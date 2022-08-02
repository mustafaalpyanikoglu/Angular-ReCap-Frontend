import { Car } from "./car";
import { ResponseModel } from "./reponseModel";

export interface CarResponseModel extends ResponseModel
{
    data:Car[]
}