import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) {

   }

   get(url:string):Observable<any>{
     return this._httpClient.get(`${environment.baseURL}${url}`)
   }

   post(url:string,body:any):Observable<any>{
    return this._httpClient.post(`${environment.baseURL}${url}`,body)
  }

  update(url:string,body:any):Observable<any>{
    return this._httpClient.put(`${environment.baseURL}${url}`,body)
  }

  delete(url:string):Observable<any>{
    return this._httpClient.delete(`${environment.baseURL}${url}`)
  }

}
