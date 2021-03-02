import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleesComponent } from './enrollees.component';
import {HttpClientModule} from '@angular/common/http';
import {EnrolleeService} from '../../service/enrollee.service';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {EnrolleeComponent} from '../enrollee/enrollee.component';

describe('EnrolleesComponent', () => {
  let component: EnrolleesComponent;
  let fixture: ComponentFixture<EnrolleesComponent>;
  let enrolleeServiceSpy: jasmine.SpyObj<EnrolleeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            redirectTo: '/enrollees',
            pathMatch: 'full'
          },
          {
            path: 'enrollees',
            component: EnrolleesComponent
          },
          {
            path: 'enrollee/:id',
            component: EnrolleeComponent
          }
        ])
      ],
      providers: [
        {
          provide: EnrolleeService,
          useValue: jasmine.createSpyObj('EnrolleeService', ['getEnrollees'])
        }
      ],
      declarations: [ EnrolleesComponent, EnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleesComponent);
    component = fixture.componentInstance;
    enrolleeServiceSpy = TestBed.inject(EnrolleeService) as jasmine.SpyObj<EnrolleeService>;
    enrolleeServiceSpy.getEnrollees.and.returnValue(
      of([
        { id:  '1', active :  true, name:  'name10' , dateOfBirth :  '07/07/2020' },
        { id:  '2', active :  true, name:  'name20' , dateOfBirth :  '07/07/2020' },
        { id:  '3', active :  true, name:  'name30' , dateOfBirth :  '07/07/2020' }])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display available enrollees', () => {
    const enrollees = fixture.nativeElement.querySelectorAll('.table-hover > tr');
    expect(enrollees.length).toBe(3);
    const enrollee = fixture.nativeElement.querySelectorAll('.table-hover > tr > td');
    expect(enrollee[0].innerText).toBe('1');
    expect(enrollee[1].innerText).toBe('name10');
    expect(enrollee[2].innerText).toBe('Jul 7, 2020');
  });
});
