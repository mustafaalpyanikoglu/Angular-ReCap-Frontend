import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];

  filterBrandId: number = 1;
  filterColorId: number = 1;
  filterCarModelName: string = "";

  carsDataLoaded: boolean = true;
  brandsDataLoaded: boolean = true;
  colorsDataLoaded: boolean = true;

  maxRandomCarLength: number = 5;
  randomCars: Car[] = [];

  routerLink: string = "";

  constructor(
    private carDetailService:CarDetailDtoService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.routerLink = 'brandid';
        this.getCarsByBrand(params['brandid']);
      } else if (params['colorid']) {
        this.routerLink = 'colorid';
        this.getCarsByColor(params['colorid']);
      } else {
        this.routerLink = '';
        this.getCars();
      }
      this.getBrands();
      this.getColors();
    });
  }

  getCars()
  {
    this.carDetailService.getCarDetailDto().subscribe((response)=>{
      this.cars = response.data;
      this.getRandomCars(this.cars,this.maxRandomCarLength);
      this.carsDataLoaded=true;
    })
  }

  getCarsByBrand(brandId: number) {
    this.carDetailService.getCarDetailByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.getRandomCars(this.cars, this.maxRandomCarLength);
      this.carsDataLoaded = true;
    });
  }

  getCarsByColor(colorId:number)
  {
    this.carDetailService.getCarDetailByColorId(colorId).subscribe(response=>{
      this.cars = response.data;
      this.getRandomCars(this.cars,this.maxRandomCarLength);
      this.carsDataLoaded = true;
    })
  }

  getRandomCars(carList:Car[],number:number)
  {
    let tempcarList:Car[] = [];
    carList.forEach(car => {
      tempcarList.push(car);
    })

    this.randomCars = [];
    if(number > tempcarList.length)
    {
      number = tempcarList.length;
    }

    for(let i=0 ;i<number ;i++)
    {
      let randomNumber = this.getRandomNumber(tempcarList.length);
      let randomCar = tempcarList[randomNumber];
      if(randomCar.carImages[0].imagePath != "/images/default/jpg")
      {
        this.randomCars.push(randomCar)
      }
      tempcarList.splice(randomNumber,1);
    }
  }

  private getRandomNumber(max:number)
  {
    return Math.floor(Math.random() * max);
  }

  getCarsByFilter(brandId:number,colorId:number)
  {
    this.carDetailService.getCarDetailByColorAndByBrand(colorId,brandId).subscribe(response => {
      this.cars = response.data;
      this.carsDataLoaded = true;
    })
  }

  getImagePath(imagePath:string)
  {
    return this.carImageService.getImagePath(imagePath);
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      this.brandsDataLoaded = true;
    })
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.colorsDataLoaded = true;
    })
  }
}
