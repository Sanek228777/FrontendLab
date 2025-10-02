import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // 🔹 додати
import { ItemCardComponent } from './item-card.component';
import { DataService } from '../shared/services/data.service';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent], // 🔹 FormsModule
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  projects: Project[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getItems();
  }

  filteredProjects(): Project[] {
    return this.projects.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
