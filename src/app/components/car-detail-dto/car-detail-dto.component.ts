import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos:CarDetailDto[]=[];
  oneCarDetailDto : CarDetailDto;


  constructor(private carDetailDtoService:CarDetailDtoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"])
      {
        this.getCarDetailByColorAndByBrand(params["colorId"],params["brandId"])
      }
      else if (params["brandId"]) 
      {
        this.getCarDetailByBrandId(params["brandId"])
      }
      
      else if(params["colorId"]) 
      {
        this.getCarDetailByColorId(params["colorId"])
      }
      else 
      {
        this.getCarDetailDto();
      }
    })
  }

  getCarDetailDto(){
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data;
      console.log(response)
    })
  }
  getCarDetailByColorId(colorId:number)
  {
    this.carDetailDtoService.getCarDetailByColorId(colorId).subscribe(response => {
      this.carDetailDtos = response.data;
    })
  }
  getCarDetailByBrandId(brandId:number)
  {
    this.carDetailDtoService.getCarDetailByBrandId(brandId).subscribe(response => {
      this.carDetailDtos = response.data;
    })
  }
  getCarDetailByColorAndByBrand(colorId:number,  brandId:number)
  {
    this.carDetailDtoService.getCarDetailByColorAndByBrand(colorId, brandId).subscribe(response => {
      this.carDetailDtos = response.data;
    })
  }
}
