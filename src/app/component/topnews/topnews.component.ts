import { Component, OnInit } from '@angular/core';
import { Topnews } from 'src/app/models/top-news/topnews';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {
topNews:Topnews[]=[]
  constructor(private _depatementService:DepartmentService) { }

  ngOnInit(): void {
    this._depatementService.getAll("/News/GetTopNews").subscribe(
      (response:any)=>{
        this.topNews = response.Data
        // console.log(this.departments)
      },
      (error:any)=>{
        console.log("error in response")
      }
      )
  }

}
