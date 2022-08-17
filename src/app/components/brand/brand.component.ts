import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from 'express';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand : Brand;
  emptyBrand:Brand;
  dataLoaded: boolean = false;
  dataWithRoute: boolean = false;
  filterBrandText: string = '';
  allBrands: string = 'All Brands';

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  setCurrentBrand(brand:Brand):void
  {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand)
  {
    if(brand == this.currentBrand)
    {
      return "list-group-item bg-dark text-white"
    }
    else
    {
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  clearCurrentBrand(){
    this.currentBrand = this.emptyBrand;
  }
}
