import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-list.component.html',
})
export class ItemsListComponent {
  projects: Project[] = [
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
}
