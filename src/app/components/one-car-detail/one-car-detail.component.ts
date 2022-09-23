import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { listResponseModel } from 'src/app/models/listResponseModel';
import { Result } from 'src/app/models/results/result';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { DateTimeService } from 'src/app/services/date-time-service.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  currentCar: CarDetailDto;
  carsOfCurrentBrand: CarDetailDto[] = [];
  carDataLoaded: boolean = false;
  rentDate: string;
  returnDate: string;

  isCarCanBeRentedNow: boolean = false;
  rentalPeriod: number;
  validateRentalDates: boolean = false;
  rentalConfirmation: SingleResponseModel<boolean>;

  constructor( private carDetailDtoService:CarDetailDtoService,
    private carDetailsService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private dateTimeService: DateTimeService,
    private cartService: CartService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCurrentCarDetails(params["carId"]).then((res) =>
        {
          console.log("if ",params["carId"])
          this.getCarsOfCurrentBrand();
          this.returnDate = undefined!;
          this.returnDate = undefined!;
          this.isCarCanBeRentedNow = false;
          this.rentalPeriod = undefined!;
          this.validateRentalDates = false;
          this.rentalConfirmation = undefined!;

        })
      }
      else
      {
        console.log(params)
      }
    })
  }

  addToCart(car: CarDetailDto, rentDate: Date, returnDate: Date) {
    let result: Result = this.cartService.addToCart(car, rentDate, returnDate);
    if (result.success) {
      this.toastrService.success(result.message, car.brandName + " " + car.modelName)
    } else {
      this.toastrService.error(result.message, car.brandName + " " + car.modelName)
    }
  }

  checkIfAnyReservationsBetweenSelectedDates(carId: number, rentDate: string, returnDate: string) {
    if (!carId || !rentDate || !returnDate) {
      return
    }
    this.validateReservationDates(rentDate, returnDate);
    if (this.validateRentalDates === true) {
      this.rentalService.checkIfCanCarBeRentedBetweenSelectedDates(carId, rentDate, returnDate).subscribe(response => {
        this.rentalConfirmation = response;
      }, error => {
        this.rentalConfirmation = error.error;
      })
    }
  }

  validateReservationDates(rentDate: string, returnDate: string) {
    if (!rentDate || !returnDate) {
      return;
    }
    let newRentDate = this.convertStringToDate(rentDate);
    let newReturnDate = this.convertStringToDate(returnDate);
    if (newRentDate >= newReturnDate) {
      this.validateRentalDates = false;
    } else {
      this.validateRentalDates = true;
    }
  }

  checkIfCarCanBeRentedNow(carId: number) {
    this.rentalService.CheckIfCanCarBeRentedNow(carId).subscribe(response => {
      this.isCarCanBeRentedNow = response.data;
    });
  }

  calculateRentalPeriod() {
    this.rentalPeriod = this.getRentalPeriod(this.convertStringToDate(this.rentDate), this.convertStringToDate(this.returnDate))
  }

  addDayToDate(date: Date, addedDay: number) {
    return this.dateTimeService.addDayToDate(date, addedDay);
  }

  convertStringToDate(dateString: string) {
    return this.dateTimeService.convertStringToDate(dateString);
  }

  getRentalPeriod(rentDate: Date, returnDate: Date): number {
    return this.dateTimeService.getRentalPeriod(rentDate, returnDate);
  }

  getDateNow() {
    return this.dateTimeService.getDateNow();
  }

  formatDate(date: Date) {
    return this.dateTimeService.formatDate(date);
  }

  getCurrentCarDetails(carId: number) {
    return new Promise<void>((resolve, reject) => {
      this.carDetailsService.getCarDetails(carId).subscribe((response) => {
        this.currentCar = response.data;
        console.log(this.currentCar.brandName)
        this.carDataLoaded = true;
        resolve();
      });
    });
  }

  getCarsOfCurrentBrand() {
    this.carDetailDtoService.getCarDetailByBrandId(this.currentCar.brandId).subscribe((response) => {
      this.carsOfCurrentBrand = response.data;

      //Markaya ait diğer araçlar listesinden, mevcut arabayı çıkartıyorum. Mevcut arabayı zaten görüntülüyor.
      let index: number = -1;
      for (let i = 0; i < this.carsOfCurrentBrand.length; i++) {
        if (this.carsOfCurrentBrand[i].id == this.currentCar.id) {
          index = i;
        }
      }
      this.carsOfCurrentBrand.splice(index, 1);
    });
  }

  getImagePath(imagePath: string) {
    return this.carImageService.getImagePath(imagePath)
  }

}
