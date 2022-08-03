import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { InsuranceCalcComponent } from './insurance-calc/insurance-calc.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'insuranceCalc',
    pathMatch:'full'
  },
  {
    path:'insuranceCalc',
    component: InsuranceCalcComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
