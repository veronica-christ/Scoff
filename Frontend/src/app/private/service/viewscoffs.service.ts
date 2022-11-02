import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scoffs } from 'src/app/interface/scoffs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewscoffsService {
  constructor(private http: HttpClient) { }
  public getScoffs():Observable<Scoffs[]>{
    return this.http.get<Scoffs[]>(`http://localhost:3000/scoffs`)
  }
  public getScoff(id:number):Observable<Scoffs>{
    return this.http.get<Scoffs>(`http://localhost:3000/scoffs/${id}`)
  }
}
