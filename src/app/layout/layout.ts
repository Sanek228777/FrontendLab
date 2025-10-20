import { Component, Input } from '@angular/core';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent {
  @Input() siteTitle!: string;
}
