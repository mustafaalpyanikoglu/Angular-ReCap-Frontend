import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44395/api/Cars/getcardetails";

  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<listResponseModel<CarDetail>>
  {
    return this.httpClient.get<listResponseModel<CarDetail>>(this.apiUrl);
  }
}
