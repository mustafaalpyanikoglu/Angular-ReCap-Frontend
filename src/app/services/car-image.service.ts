import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/reponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44395/';
  constructor(private httpClient:HttpClient) { }

  getImagePath(imagePath: string) {
    console.log(this.apiUrl+"images/" + imagePath)
    return this.apiUrl+"images/" + imagePath
  }

  uploadImage(image:File,carId:number):Observable<ResponseModel>
  {
    let newPath = this.apiUrl + "api/carimages/add"
    const sendForm = new FormData();
    sendForm.append('carId',JSON.stringify(carId))
    sendForm.append('carImage',image,image.name)
    return this.httpClient.post<ResponseModel>(newPath,sendForm);
  }

  deleteImage(carImage: CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/carimages/delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }

  getCarImages():Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'api/carimages/getall'
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'api/carimages/getbycarid?carId=' + carId;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
  getCarImagesById(id:number):Observable<listResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + 'api/carimages/getbyimageid?imageId=' + id;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
}
