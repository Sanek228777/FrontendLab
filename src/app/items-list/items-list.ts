import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent {
  searchTerm = '';

  courses: Course[] = [
    { id: 1, title: 'HTML & CSS для початківців', description: 'Вивчення основ верстки та стилізації сторінок.', level: 'Початковий', duration: '4 тижні', imageUrl: 'assets/html-css.png', featured: true },
    { id: 2, title: 'JavaScript Основи', description: 'Практичне вивчення базового JavaScript.', level: 'Середній', duration: '6 тижнів', imageUrl: 'assets/js.png', featured: false },
    { id: 3, title: 'Angular Framework', description: 'Побудова SPA-додатків з використанням Angular.', level: 'Просунутий', duration: '8 тижнів', imageUrl: 'assets/angular.png', featured: true }
  ];

  get filteredCourses() {
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onCourseSelected(course: Course) {
    console.log('Обраний курс:', course);
  }
}
