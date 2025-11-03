import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  private coursesSubject = new BehaviorSubject<Course[]>(this.courses);
  courses$ = this.coursesSubject.asObservable();

  constructor() {}

  getItems(): Observable<Course[]> {
    return of(this.courses);
  }

  getItemById(id: number): Observable<Course | undefined> {
    const item = this.courses.find(c => c.id === id);
    return of(item);
  }

  filterCourses(term: string): void {
    const filtered = this.courses.filter(c =>
      c.title.toLowerCase().includes(term.toLowerCase())
    );
    this.coursesSubject.next(filtered);
  }
  resetCourses(): void {
    this.coursesSubject.next(this.courses);
  }
  addCourse(course: Course): void {
    this.courses.push(course);
    this.coursesSubject.next(this.courses);
  }

}
