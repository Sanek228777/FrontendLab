import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../../shared/models/course';
import { HoverHighlightDirective } from '../../shared/directives/hover-highlight.directive';
import { TruncateDescriptionPipe } from '../../shared/pipes/truncate-description.pipe';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HoverHighlightDirective,
    TruncateDescriptionPipe
  ],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() course!: Course;
}
