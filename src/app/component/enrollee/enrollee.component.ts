import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnrolleeService} from '../../service/enrollee.service';
import {Enrollee} from '../../model/enrollee.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit {
  id: string;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  enrollee: Enrollee | null = null;
  enrolleeForm: FormGroup | null;

  constructor(private route: ActivatedRoute,
              private enrolleeService: EnrolleeService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEnrollee();
  }

  getEnrollee(): void {
    this.enrolleeService.getEnrollee(this.id).subscribe(
      value => {
        this.enrollee = value;
        this.setUpForm();
      },
      error => {
        console.log(error);
      }
    );
  }

  setUpForm(): void {
    this.enrolleeForm = this.formBuilder.group({
      id: [this.enrollee.id, Validators.required],
      name: [this.enrollee.name, [Validators.required, Validators.min(0)]],
      dateOfBirth: [this.enrollee.dateOfBirth],
      active: [this.enrollee.active, Validators.required]
    });
  }

  onSubmit(): void {
    this.enrolleeService.updateEnrollee(this.enrolleeForm.value).subscribe(
      value => {
        this.successMessage = 'Successfully updated enrollee!';
        this.enrolleeForm.setValue(value);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
