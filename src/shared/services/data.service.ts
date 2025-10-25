import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private courses: Course[] = [
    {
      id: 1,
      title: 'HTML & CSS для початківців',
      description: 'Вивчення основ верстки та стилізації сторінок.',
      level: 'Початковий',
      duration: '4 тижні',
      imageUrl: 'assets/html-css.png',
      featured: true
    },
    {
      id: 2,
      title: 'JavaScript Основи',
      description: 'Практичне вивчення базового JavaScript.',
      level: 'Середній',
      duration: '6 тижнів',
      imageUrl: 'assets/js.png',
      featured: false
    },
    {
      id: 3,
      title: 'Angular Framework',
      description: 'Побудова SPA-додатків з використанням Angular.',
      level: 'Просунутий',
      duration: '8 тижнів',
      imageUrl: 'assets/angular.png',
      featured: true
    }
  ];

  constructor() {}

  getItems(): Course[] {
    return this.courses;
  }
}
