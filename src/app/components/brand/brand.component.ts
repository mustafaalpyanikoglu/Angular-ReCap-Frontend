import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import {HttpClient} from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  dataLoaded = false;

  apiUrl = "https://localhost:44395/api/Brands/getall";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.httpClient
    .get<BrandResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.brands = response.data
      this.dataLoaded = true;
    });
  }
}
