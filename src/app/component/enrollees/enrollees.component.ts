import { Component, OnInit } from '@angular/core';
import {EnrolleeService} from '../../service/enrollee.service';
import {Enrollee} from '../../model/enrollee.model';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})
export class EnrolleesComponent implements OnInit {
  enrollees: Enrollee[] = [];

  constructor(private enrolleeService: EnrolleeService) { }

  ngOnInit(): void {
    this.fetchEnrollees();
  }

  fetchEnrollees(): void {
    this.enrolleeService.getEnrollees().subscribe(
      value => {
        this.enrollees = value;
      },
      error => {
        console.log(error);
      }
    );
  }
}
