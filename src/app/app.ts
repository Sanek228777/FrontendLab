import { Component } from '@angular/core';
import { ItemsListComponent } from './items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Web - розроблення';
}
