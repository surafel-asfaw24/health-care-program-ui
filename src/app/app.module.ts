import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EnrolleesComponent } from './component/enrollees/enrollees.component';
import { EnrolleeComponent } from './component/enrollee/enrollee.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EnrolleesComponent,
    EnrolleeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
