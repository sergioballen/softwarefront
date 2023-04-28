import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarEscService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ScenarySports/api/Scenary'

  public readAll():Observable<any>{
    return this.http.get(this.Url);
  }
}
