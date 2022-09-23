import { CarDetailDto } from "./carDetailDto";
import { Rental } from "./rental"

export class CartItem{
    car:CarDetailDto;
    rentDate:Date;
    returnDate:Date;
}