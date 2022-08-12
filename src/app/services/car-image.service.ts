import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44395/api/carimages/';
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'getall'
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'getbycarid?carId=' + carId;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
  getCarImagesById(id:number):Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'getbyimageid?imageId=' + id;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
}
