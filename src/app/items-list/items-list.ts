import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().subscribe(courses => {
      this.courses = courses;
    });
  }

  onSearchChange() {
    if (this.searchTerm.trim() === '') {
      this.dataService.getItems().subscribe(courses => this.courses = courses);
    } else {
      this.courses = this.courses.filter(c =>
        c.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
