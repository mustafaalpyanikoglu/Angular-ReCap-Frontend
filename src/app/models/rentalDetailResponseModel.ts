import { RentalDetail } from "./rentalDetail";
import { ResponseModel } from "./reponseModel";

export interface RentalDetailResponseModel extends ResponseModel
{
    data:RentalDetail[]
}