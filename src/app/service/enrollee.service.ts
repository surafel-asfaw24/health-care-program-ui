import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enrollee} from '../model/enrollee.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private httpClient: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    return this.httpClient.get<Enrollee[]>('http://localhost:4200/api/enrollees');
  }

  getEnrollee(id: string): Observable<Enrollee> {
    return this.httpClient.get<Enrollee>('http://localhost:4200/api/enrollees/' + id);
  }
}
