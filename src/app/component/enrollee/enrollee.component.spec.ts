import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeComponent } from './enrollee.component';
import {HttpClientModule} from '@angular/common/http';
import {EnrolleeService} from '../../service/enrollee.service';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {of} from 'rxjs';

describe('EnrolleeComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;
  let enrolleeServiceSpy: jasmine.SpyObj<EnrolleeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {
          provide: EnrolleeService,
          useValue: jasmine.createSpyObj('EnrolleeService', ['getEnrollee', 'updateEnrollee'])
        }
      ],
      declarations: [ EnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    enrolleeServiceSpy = TestBed.inject(EnrolleeService) as jasmine.SpyObj<EnrolleeService>;

    enrolleeServiceSpy.getEnrollee.and.returnValue(of({ id:  '1', active :  true, name:  'name10' , dateOfBirth :  '07/07/2020' }));
    enrolleeServiceSpy.updateEnrollee.and.returnValue(of({ id:  '1', active :  true, name:  'name20' , dateOfBirth :  '07/07/2020' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the enrollee', () => {
    const id = fixture.nativeElement.querySelector('#id');
    expect(id.value).toBe('1');
    const name = fixture.nativeElement.querySelector('#name');
    expect(name.value).toBe('name10');
    const dateOfBirth = fixture.nativeElement.querySelector('#dateOfBirth');
    expect(dateOfBirth.value).toBe('07/07/2020');
  });

  it('should submit form on submit', () => {
    const name1 = fixture.nativeElement.querySelector('#name');
    expect(name1.value).toBe('name10');

    const button = fixture.nativeElement.querySelector('#submit-button');
    button.click();

    fixture.detectChanges();

    expect(enrolleeServiceSpy.updateEnrollee).toHaveBeenCalled();

    const name2 = fixture.nativeElement.querySelector('#name');
    expect(name2.value).toBe('name20');
  });
});
