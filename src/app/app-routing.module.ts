import { HOST_ATTR } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentNewsComponent } from './component/department-news/department-news.component';
import { DepartmentNewsdetailsComponent } from './component/department-newsdetails/department-newsdetails.component';
import { HomeComponent } from './component/home/home.component';
import { MorenewsComponent } from './component/morenews/morenews.component';
import { TopnewsComponent } from './component/topnews/topnews.component';

const routes: Routes = [
{path:"news/details/:id",component:DepartmentNewsdetailsComponent},
{path:"news/:id",component:DepartmentNewsComponent},
{path:"topnews",component:TopnewsComponent},
{path:'morenews/:id',component:MorenewsComponent},
{path:"**",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
