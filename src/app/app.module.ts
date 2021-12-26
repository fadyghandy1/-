import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './component/department/department.component';
import{HttpClientModule} from '@angular/common/http';
import { DepartmentNewsComponent } from './component/department-news/department-news.component';
import { DepartmentNewsdetailsComponent } from './component/department-newsdetails/department-newsdetails.component';
import { TopnewsComponent } from './component/topnews/topnews.component';
import { MorenewsComponent } from './component/morenews/morenews.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentNewsComponent,
    DepartmentNewsdetailsComponent,
    TopnewsComponent,
    MorenewsComponent,
    HomeComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
