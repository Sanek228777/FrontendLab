import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() course!: Course;
  @Output() selectCourse = new EventEmitter<Course>();

  onSelect() {
    this.selectCourse.emit(this.course);
  }
}
