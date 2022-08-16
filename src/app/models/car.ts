import { DecimalPipe } from "@angular/common";
import { CarImage } from "./carImage";

export interface Car
{
    id: number;
    brandId: number;
    brandName: string;
    colorId: number;
    colorName: string;
    minFindexScore: number;
    modelName: string;
    modelYear: number;
    dailyPrice: number;
    description: string;
    carImages: CarImage[];
}