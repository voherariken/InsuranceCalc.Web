import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './core/data.service';
import { InsuranceCalcComponent } from './insurance-calc/insurance-calc.component';
import { ErrorComponent } from './error/error.component';
import { DateOfBirthValidatorDirective } from './core/date-of-birth-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceCalcComponent,
    ErrorComponent,
    DateOfBirthValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
