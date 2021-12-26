import { Component, OnInit } from '@angular/core';
import { Topnews } from 'src/app/models/top-news/topnews';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'morenews',
  templateUrl: './morenews.component.html',
  styleUrls: ['./morenews.component.css']
})
export class MorenewsComponent implements OnInit {

  moreNews:Topnews[]=[]
  constructor(private _depatementService:DepartmentService) { }

  ngOnInit(): void {
    this._depatementService.getAll("/News/GetTopNews").subscribe(
      (response:any)=>{
        this.moreNews = response.Data
        // console.log(this.departments)
      },
      (error:any)=>{
        console.log("error in response")
      }
      )
  }

}
