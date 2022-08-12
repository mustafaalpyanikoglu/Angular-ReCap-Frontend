import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  oneCarDetailDto:CarDetailDto[] = [];

  constructor( private carDetailDtoService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carDetailDtoService.getCarDetailByCarId(carId).subscribe(response => {
      this.oneCarDetailDto = response.data;
      console.log(this.oneCarDetailDto[0])
    })
  }

}
