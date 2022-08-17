import { CarImage } from "./carImage";

export interface CarDetailDto
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
    imagePath:string;
}