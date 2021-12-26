import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


 constructor(private  apiService:ApiService ) { }

  getAll(url:string) :Observable<any> {
     return this.apiService.get(url);
  }

  getById(url:string,id:number):Observable<any>{
    return this.apiService.get(`${url}${id}`)
  }

}
