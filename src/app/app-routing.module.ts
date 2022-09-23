import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeComponent } from './components/home/home.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:HomeComponent },
  { path:'brand/:brandId',  component:CarDetailDtoComponent  },
  { path:'color/:colorId',  component:CarDetailDtoComponent  },
  { path: 'car-details/:carId', component: OneCarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
