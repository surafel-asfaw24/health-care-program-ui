import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enrollee} from '../model/enrollee.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {
  baseUrl = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    return this.httpClient.get<Enrollee[]>(`${this.baseUrl}/enrollees`);
  }

  getEnrollee(id: string): Observable<Enrollee> {
    return this.httpClient.get<Enrollee>(`${this.baseUrl}/enrollees/${id}`);
  }

  updateEnrollee(enrollee: Enrollee): Observable<Enrollee> {
    return this.httpClient.put<Enrollee>(`${this.baseUrl}/enrollees/${enrollee.id}`, enrollee);
  }
}
