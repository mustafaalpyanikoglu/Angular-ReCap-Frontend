import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from '../models/rentalDetail';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44395/api/Rentals/getrentaldetail";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalDetailResponseModel>
  {
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl);
  }
}
