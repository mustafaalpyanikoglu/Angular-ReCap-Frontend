import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = "https://localhost:44395";

  constructor(private httpClient:HttpClient) { }

  getCarDetailDto():Observable<listResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + '/api/cars/getcardetails'
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByBrandId(brandId:number):Observable<listResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + '/api/cars/getcardetailbybrandid?id=' + brandId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorId(colorId:number):Observable<listResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + '/api/cars/getcardetailbycolorid?id=' + colorId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorAndByBrand(colorId:number, brandId:number):Observable<listResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + '/api/cars/getcardetailsbycolorandbybrand?colorId=' + colorId + '&brandId=' + brandId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByCarId(carId:number):Observable<listResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + '/api/cars/getcardetailbyid?id=' + carId
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
}
