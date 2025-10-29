import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() course!: Course;
}
