import { Component, OnInit } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [NgIf, DatePipe, RouterLink], // <— ось це важливо
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetailsComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getItemById(id).subscribe(item => {
      this.project = item;
    });
  }
}
