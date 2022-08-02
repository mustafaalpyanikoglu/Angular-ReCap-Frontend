import { DecimalPipe } from "@angular/common";

export interface Car
{
    carId:number;
    brandId:number;
    colorId:number;
    modelYear:string;
    dailyPrice:DecimalPipe;
    description:string;
}