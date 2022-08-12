import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44395/api/Cars/getcardetails";

  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<listResponseModel<CarDetailDto>>
  {
    return this.httpClient.get<listResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
