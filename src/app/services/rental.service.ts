import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { RentPaymentRequest } from '../models/rent-payment-request';
import { RentalDetail } from '../models/rentalDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

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

  CheckIfCanCarBeRentedNow(carId: number): Observable<SingleResponseModel<boolean>> {
    let newPath = this.apiUrl + 'rentals/checkifcancarberentednow?carid=' + carId;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  checkIfCanCarBeRentedBetweenSelectedDates(carId: number, rentDate: string, returnDate: string): Observable<SingleResponseModel<boolean>> {
    let newPath = this.apiUrl + 'rentals/checkifcancarberentedbetweenselecteddates?carid=' + carId + '&rentdate=' + rentDate + '&returndate=' + returnDate;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  rent(rentRequest:RentPaymentRequest):Observable<SingleResponseModel<number>>{
    let newPath = this.apiUrl + 'rentals/rent';
    return this.httpClient.post<SingleResponseModel<number>>(newPath,rentRequest);
  }
}
