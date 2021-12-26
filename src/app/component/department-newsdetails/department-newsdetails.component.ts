import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentNews } from 'src/app/models/department-news';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-newsdetails',
  templateUrl: './department-newsdetails.component.html',
  styleUrls: ['./department-newsdetails.component.css']
})
export class DepartmentNewsdetailsComponent implements OnInit {

  newsDetails=new DepartmentNews()
  constructor(private _httpClient:HttpClient ,private _depatementService:DepartmentService,private _router:ActivatedRoute) { }

  //=18782

  ngOnInit(): void {
    // let id =  this._router.snapshot.params.id;
    this._router.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
    this._depatementService.getById("/News/GetDetails?id=",id).subscribe(
      (respons:any)=>{
        this.newsDetails=respons.Data
         console.log(this.newsDetails);
      
      },
      (error:any)=>{
        console.log("error")
      }

    )
    })
  }

}
