import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListComponent } from './items-list';
import { DataService } from '../../shared/services/data.service';
import { of } from 'rxjs';
import { ItemCardComponent } from '../item-card/item-card';
import { By } from '@angular/platform-browser';
import { Course } from '../../shared/models/course';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemsListComponent (інтеграційний тест)', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DataService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [
        ItemsListComponent,
        ItemCardComponent,
        RouterTestingModule
      ],
      providers: [{ provide: DataService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  it('повинен відображати список курсів через ItemCardComponent', () => {
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'Angular',
        description: 'Frontend',
        level: 'Базовий',
        duration: '5 тижнів',
        imageUrl: 'angular.jpg',
        featured: false
      },
      {
        id: 2,
        title: 'React',
        description: 'JS Library',
        level: 'Просунутий',
        duration: '6 тижнів',
        imageUrl: 'react.jpg',
        featured: true
      }
    ];

    dataServiceSpy.getAll.and.returnValue(of(mockCourses));

    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.directive(ItemCardComponent));
    expect(cards.length).toBe(2);
  });
});
