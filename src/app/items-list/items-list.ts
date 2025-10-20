import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../../shared/services/data.service';
import { Project } from '../../shared/models/project.model';


@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {
  projects: Project[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getItems();
  }

  filteredProjects(): Project[] {
    return this.projects.filter((p: Project) =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
