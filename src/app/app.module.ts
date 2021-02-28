import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EnrolleesComponent } from './component/enrollees/enrollees.component';
import { EnrolleeComponent } from './component/enrollee/enrollee.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    EnrolleesComponent,
    EnrolleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EnrolleesComponent]
})
export class AppModule { }
