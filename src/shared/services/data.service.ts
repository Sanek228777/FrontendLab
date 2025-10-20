import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Сайт-портфоліо',
      description: 'Особистий сайт для представлення робіт',
      technology: 'Angular, TypeScript, SCSS',
      author: 'Іван Іванов',
      createdAt: new Date('2025-01-15')
    },
    {
      id: 2,
      name: 'Інтернет-магазин',
      description: 'Web-додаток для онлайн продажів',
      technology: 'React, Node.js, MongoDB',
      author: 'Марія Петренко',
      createdAt: new Date('2025-03-10')
    },
    {
      id: 3,
      name: 'Навчальна платформа',
      description: 'Сервіс для проведення онлайн-курсів',
      technology: 'Vue.js, Firebase',
      author: 'Олександр Коваленко',
      createdAt: new Date('2025-04-05')
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projectsSubject.asObservable();

  constructor() {}

  getItems(): Observable<Project[]> {
    return of(this.projects).pipe(
      tap(projects => this.projectsSubject.next([...projects]))
    );
  }

  filterProjects(searchTerm: string): void {
    const query = searchTerm.trim().toLowerCase();
    const filtered = query
      ? this.projects.filter(p =>
        p.name.toLowerCase().includes(query)
      )
      : this.projects;

    this.projectsSubject.next(filtered);
  }

  getItemById(id: number): Observable<Project | undefined> {
    const found = this.projects.find(p => p.id === id);
    return of(found);
  }
}
