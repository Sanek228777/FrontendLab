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
      description: 'Персональний вебсайт для демонстрації проєктів і навичок.',
      details: `Цей сайт розроблено для особистого брендингу.
    Містить сторінки "Про мене", "Мої роботи", "Контакти".
    Реалізовано адаптивну верстку, інтеграцію з Firebase для форми зворотного зв’язку
    та можливість перегляду портфоліо у форматі галереї.`,
      technology: 'Angular, TypeScript, SCSS, Firebase Hosting',
      author: 'Іван Іванов',
      createdAt: new Date('2025-01-15')
    },
    {
      id: 2,
      name: 'Інтернет-магазин',
      description: 'Веб-додаток для продажу товарів онлайн із системою кошика.',
      details: `Повноцінна e-commerce система з авторизацією,
    фільтрацією товарів, панеллю адміністратора,
    аналітикою продажів та інтеграцією з платіжною системою Stripe.
    Має REST API, розділену frontend і backend архітектуру.`,
      technology: 'React, Node.js, MongoDB, Express, Stripe API',
      author: 'Марія Петренко',
      createdAt: new Date('2025-03-10')
    },
    {
      id: 3,
      name: 'Навчальна платформа',
      description: 'Онлайн-платформа для курсів і тестування студентів.',
      details: `Система управління навчанням (LMS),
    яка дозволяє створювати курси, завдання, проводити тести та відслідковувати успішність студентів.
    Реалізовано ролі "Викладач", "Студент", "Адміністратор".`,
      technology: 'Vue.js, Firebase, TailwindCSS, Cloud Firestore',
      author: 'Олександр Коваленко',
      createdAt: new Date('2025-04-05')
    },
    {
      id: 4,
      name: 'Мобільний додаток “FitLife”',
      description: 'Мобільний трекер активності з порадами для здоров’я.',
      details: `Додаток фіксує кроки, калорії, сон та тренування.
    Підтримує push-нагадування, статистику за тиждень,
    синхронізацію з Google Fit та базу даних Firebase.
    Інтерфейс розроблено у стилі Material Design.`,
      technology: 'Ionic, Angular, Capacitor, Firebase Auth',
      author: 'Катерина Шевченко',
      createdAt: new Date('2025-06-01')
    },
    {
      id: 5,
      name: 'CRM-система для бізнесу',
      description: 'CRM-додаток для управління клієнтами, угодами та проєктами.',
      details: `Вебзастосунок містить панель керування,
    звіти з продажів, управління співробітниками,
    нагадування про дедлайни та інтеграцію з Google Sheets API.
    Передбачено авторизацію та розмежування доступу за ролями.`,
      technology: 'Angular, NestJS, PostgreSQL, Chart.js',
      author: 'Дмитро Андрущенко',
      createdAt: new Date('2025-02-20')
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
