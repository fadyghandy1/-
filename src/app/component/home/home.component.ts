import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepartmentNews } from 'src/app/models/department-news';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Items:DepartmentNews[]=[]

homeNews:DepartmentNews[]=[]

constructor(private _httpClient:HttpClient ,private _depatementService:DepartmentService) { }

ngOnInit(): void {
  this._depatementService.getAll(`/Department/GetHomeDepartments`).subscribe(
    (response:any)=>{
      this.homeNews = response.Data
      // data[0].item.[0].Date
       console.log(this.homeNews)
    },
    (error:any)=>{
      console.log("error in response")
    }
    )
  


}


}
