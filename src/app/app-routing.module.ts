import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { HomeComponent } from './components/home/home.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:HomeComponent },
  { path:'brand/:brandId',  component:CarDetailDtoComponent  },
  { path:'color/:colorId',  component:CarDetailDtoComponent  },
  { path:'car/:carId',  component:OneCarDetailComponent  },
  { path:'cars/:carId',  component:CarDetailDtoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
