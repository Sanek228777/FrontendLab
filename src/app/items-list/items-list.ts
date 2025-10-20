import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'HTML & CSS для початківців',
      level: 'Початковий',
      duration: '4 тижні',
      description: 'Вивчення основ розмітки HTML та стилізації CSS.',
      imageUrl: 'assets/html-css.jpg'
    },
    {
      id: 2,
      title: 'JavaScript Основи',
      level: 'Середній',
      duration: '6 тижнів',
      description: 'Практичне вивчення базового JavaScript.',
      imageUrl: 'assets/javascript.jpg'
    },
    {
      id: 3,
      title: 'Angular Framework',
      level: 'Просунутий',
      duration: '8 тижнів',
      description: 'Побудова SPA-додатків на Angular.',
      imageUrl: 'assets/angular.jpg'
    }
  ];
}
