import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarComponent } from './components/car/car.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:CarDetailDtoComponent },
  { path:'cardetails',  component:CarDetailDtoComponent },
  { path:'cardetails/brand/:brandId',  component:CarDetailDtoComponent  },
  { path:'cardetails/color/:colorId',  component:CarDetailDtoComponent  },
  { path:'cars',  component:CarComponent  },
  { path:'car/:carId',  component:OneCarDetailComponent  },
  { path:'cars/:carId',  component:CarDetailDtoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
