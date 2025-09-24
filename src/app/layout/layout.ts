import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  title = 'Web-розроблення';
  appName = 'AngularApp';
}
