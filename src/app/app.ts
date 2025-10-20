import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout [siteTitle]="siteTitle"></app-layout>`
})
export class AppComponent {
  siteTitle = 'Платформа для веб-розробки';
}
