import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/reponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44395/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>> 
  {
    return this.httpClient.get<listResponseModel<Brand>>(this.apiUrl+'brands/getall');
  }

    getCarsByBrandId(brandId:number):Observable<listResponseModel<Brand>> 
    {
      let newPath=this.apiUrl+ "cars/brands/getbyid?id="+brandId;
      return this.httpClient.get<listResponseModel<Brand>>(newPath);
    }

    add(brand: Brand): Observable<ResponseModel> {
      let newPath = this.apiUrl + 'brands/add'
      return this.httpClient.post<ResponseModel>(newPath, brand);
    }
  
    delete(brand: Brand): Observable<ResponseModel> {
      let newPath = this.apiUrl + 'brands/delete'
      return this.httpClient.post<ResponseModel>(newPath, brand)
    }
  
    update(brand: Brand): Observable<ResponseModel> {
      let newPath = this.apiUrl + 'brands/update'
      return this.httpClient.post<ResponseModel>(newPath, brand)
    }
}
