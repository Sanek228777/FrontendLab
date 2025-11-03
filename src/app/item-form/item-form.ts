import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      level: ['', Validators.required],
      duration: ['', Validators.required],
      imageUrl: [''],
      featured: [false]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newCourse: Course = this.form.value;
    this.dataService.addCourse(newCourse);
    this.router.navigate(['/items']);
  }
}
