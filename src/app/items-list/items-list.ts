import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {

  courses: Course[] = [];
  searchTerm = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.courses = this.dataService.getItems();
  }

  get filteredCourses() {
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onCourseSelected(course: Course) {
    console.log('Обраний курс:', course);
  }
}
