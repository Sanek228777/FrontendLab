import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {
  courses$!: Observable<Course[]>;
  searchTerm: string = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courses$ = this.dataService.getAll();
  }

  onSearchChange() {
    this.courses$ = this.dataService.getAll().pipe(
      map((courses: Course[]) =>
        courses.filter((c: Course) =>
          c.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }
}
