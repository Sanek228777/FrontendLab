import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/models/project.model';


@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() project!: Project;
}
