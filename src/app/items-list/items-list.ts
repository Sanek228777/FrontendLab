import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  searchTerm: string = '';
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.courses$.subscribe(data => {
      this.courses = data;
    });

    this.dataService.getItems().subscribe(data => {
      this.courses = data;
    });
  }

  onSearchChange(): void {
    if (this.searchTerm.trim() === '') {
      this.dataService.resetCourses();
    } else {
      this.dataService.filterCourses(this.searchTerm);
    }
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
