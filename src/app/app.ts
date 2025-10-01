import { Component } from '@angular/core';
import { ItemsListComponent } from './items-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'My App';
}
