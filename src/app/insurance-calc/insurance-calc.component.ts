import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../core/data.service';
import { Occupation } from '../models/Occupation';

@Component({
  selector: 'app-insurance-calc',
  templateUrl: './insurance-calc.component.html',
  styleUrls: ['./insurance-calc.component.css']
})
export class InsuranceCalcComponent implements OnInit, OnDestroy {
  title = 'InsuranceCalc';
  formInsuranceCalc : FormGroup;
  occupations :  Occupation[] = [];
  deathPremium : number | null = null;
  subscription : Subscription  = new Subscription();

  constructor(private formBuilder : FormBuilder, private dataService : DataService){
    this.formInsuranceCalc = this.formBuilder.group({
      name:[,Validators.required],
      age:[,[Validators.required, Validators.min(1)]],
      dateOfBirth:[,[Validators.required]],
      occupation:[,Validators.required],
      deathSumInsured:[,[Validators.required, Validators.min(1)]]
    });
    this.getOccupations();
  }

  ngOnInit(): void { }

  getError(controlName : string, errorType:string) : boolean{
    var v = this.formInsuranceCalc.get(controlName)?.errors;
    return v ? v[errorType]:false;
  }

  getOccupations() : void {
      this.subscription.add(
        this.dataService.getList<Occupation>('InsuranceCalculator/occupations').subscribe(p => this.occupations = p)
        );
  }

  submitInsuranceCalc() : void {
    if(!this.formInsuranceCalc.valid){
      this.formInsuranceCalc.markAllAsTouched();
      return;
    }
    const obj = Object.assign({});
    obj.name = this.formInsuranceCalc.value["name"];
    obj.age = this.formInsuranceCalc.value["age"];
    obj.dateOfBirth = this.formInsuranceCalc.value["dateOfBirth"];
    obj.occupationId = +this.formInsuranceCalc.value["occupation"];
    obj.deathSumInsured = this.formInsuranceCalc.value["deathSumInsured"];
    this.subscription.add(
      this.dataService.post<number>('InsuranceCalculator/deathPremium', obj)
        .subscribe(p => {console.log(p); this.deathPremium = p})
      );
  }

  public onOccupationChange():void{
    if(this.formInsuranceCalc.valid){
      this.submitInsuranceCalc();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
