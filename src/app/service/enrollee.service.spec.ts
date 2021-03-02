import { TestBed } from '@angular/core/testing';

import { EnrolleeService } from './enrollee.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Enrollee} from '../model/enrollee.model';

describe('EnrolleeService', () => {
  let service: EnrolleeService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrolleeService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(EnrolleeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should fetch all available enrollees when getEnrollees is called', () => {
    const  someEnrollees: Enrollee[] = [
      { id:  '1', active :  true, name:  'name10' , dateOfBirth :  '100' },
      { id:  '2', active :  true, name:  'name20' , dateOfBirth :  '200' },
      { id:  '3', active :  true, name:  'name30' , dateOfBirth :  '300' }
    ];

    service.getEnrollees().subscribe((enrollees) => {
      expect(enrollees.length).toBe(3);
      expect(enrollees).toEqual(someEnrollees);
    });

    const  request = httpMock.expectOne(`${service.baseUrl}/enrollees`);
    request.flush(someEnrollees);
    httpMock.verify();
  });

  it('Should fetch the enrollee when getEnrollees is called', () => {
    const  someEnrollee: Enrollee = { id:  '1', active :  true, name:  'name10' , dateOfBirth :  '100' };

    service.getEnrollee(someEnrollee.id).subscribe((enrollee) => {
      expect(enrollee).not.toBeNull();
      expect(enrollee).toEqual(someEnrollee);
    });

    const  request = httpMock.expectOne(`${service.baseUrl}/enrollees/${someEnrollee.id}`);
    expect(request.request.method).toBe('GET');
    request.flush(someEnrollee);
    httpMock.verify();
  });

  it('Should fetch the enrollee when getEnrollee is called', () => {
    const  someEnrollee: Enrollee = { id:  '1', active :  true, name:  'name10' , dateOfBirth :  '100' };

    service.getEnrollee(someEnrollee.id).subscribe((enrollee) => {
      expect(enrollee).not.toBeNull();
      expect(enrollee).toEqual(someEnrollee);
    });

    const  request = httpMock.expectOne(`${service.baseUrl}/enrollees/${someEnrollee.id}`);
    expect(request.request.method).toBe('GET');
    request.flush(someEnrollee);
    httpMock.verify();
  });

  it('Should update the enrollee when updateEnrollee is called', () => {
    const  someEnrollee: Enrollee = { id:  '1', active :  true, name:  'name10' , dateOfBirth :  '100' };

    service.updateEnrollee(someEnrollee).subscribe((enrollee) => {
      expect(enrollee).not.toBeNull();
      expect(enrollee).toEqual(someEnrollee);
    });

    const request = httpMock.expectOne(`${service.baseUrl}/enrollees/${someEnrollee.id}`);
    expect(request.request.method).toBe('PUT');
    request.flush(someEnrollee);
    httpMock.verify();
  });
});
