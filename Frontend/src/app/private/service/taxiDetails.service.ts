import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxiDetails } from 'src/app/interface/taxi-details';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class TaxiDetailsService {

  constructor(private http: HttpClient) { }
  public getTaxiDetail(regNo:any){
    return this.http.get(baseURL+ `/taxidetails`,regNo)
  }
  
  public getTaxiDetails(){
    return this.http.get(baseURL+ `/taxidetails`)
  }
 addTaxi(details:any){
  return this.http.post(baseURL+'/addTaxi',details) }

 public updateStatus(status: any, regNo:any) {
    return this.http.put( baseURL+ '/updatestatus',regNo,status);
  }


}
