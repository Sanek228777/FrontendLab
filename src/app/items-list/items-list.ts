import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Project } from '../../shared/models/project.model';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  searchTerm = '';
  private subs = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subs.add(
      this.dataService.projects$.subscribe(projects => {
        this.projects = projects;
      })
    );

    this.subs.add(
      this.dataService.getItems().subscribe()
    );
  }

  onSearchChange(): void {
    this.dataService.filterProjects(this.searchTerm);
  }

  onProjectSelected(project: Project) {
    console.log('Вибраний проект:', project);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
