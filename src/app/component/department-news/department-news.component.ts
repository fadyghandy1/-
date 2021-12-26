import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentNews } from 'src/app/models/department-news';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'department-news',
  templateUrl: './department-news.component.html',
  styleUrls: ['./department-news.component.css']
})
export class DepartmentNewsComponent implements OnInit {
news:DepartmentNews[]=[]
  id: number=0;

  constructor(private _httpClient:HttpClient ,private _depatementService:DepartmentService,private _router:ActivatedRoute) { 
    //console.log(this._router.url.);
  }


  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {

      var  id = params.get('id');


      //console.log(id);

    });

    // this._router.queryParams.subscribe(params => {
    //   const userId = params;
    //   console.log(userId);
    // });



    
    this._router.paramMap.subscribe(params => {
    let id = Number(params.get('id'));
    this._depatementService.getById("/News/GetByDepartmentID?departmentID=",id).subscribe(
      (respons:any)=>{
        this.news=respons.Data.Result
        // console.log(this.news);
      },
      (error:any)=>{

      }

    )
  });
    
  }
///////////////////////////////////////////
  setId(){
   return this.id=this._router.snapshot.params.id;
  
   }
}


 
