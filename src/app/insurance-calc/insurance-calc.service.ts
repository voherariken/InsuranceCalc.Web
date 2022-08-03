import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCalcService {

  constructor(private dataService : DataService) { }

  // public deathPremium():Observable<number>{
  //   this.dataService.post("/deathPremium",)
  // }
}
