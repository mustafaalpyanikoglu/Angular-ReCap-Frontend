import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44395/api/Rentals/getrentaldetail";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<RentalDetail>>
  {
    return this.httpClient.get<listResponseModel<RentalDetail>>(this.apiUrl);
  }
}
