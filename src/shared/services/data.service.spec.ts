import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Course } from '../models/course';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('повинен отримувати всі курси (getAll)', () => {
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'Angular',
        description: 'Frontend course',
        level: 'Початковий',
        duration: '20 годин',
        imageUrl: 'angular.jpg',
        featured: false
      },
      {
        id: 2,
        title: 'React',
        description: 'React library',
        level: 'Просунутий',
        duration: '25 годин',
        imageUrl: 'react.jpg',
        featured: true
      }
    ];

    service.getAll().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });
});
