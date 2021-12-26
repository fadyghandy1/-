import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:Department[]=[]
  constructor(private _httpClient:HttpClient ,private _depatementService:DepartmentService) { }

  ngOnInit(): void {
    this._depatementService.getAll(`/Department/GetMenu`).subscribe(
      (response:any)=>{
        this.departments = response.Data
        // console.log(this.departments)
      },
      (error:any)=>{
        console.log("error in response")
      }
      )
    


  }

}
