import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardComponent } from './item-card';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncateDescriptionPipe } from '../../shared/pipes/truncate-description.pipe';
import { HoverHighlightDirective } from '../../shared/directives/hover-highlight.directive';
import { Course } from '../../shared/models/course';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardComponent, RouterTestingModule, TruncateDescriptionPipe, HoverHighlightDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;

    (component as any).course = {
      id: 1,
      title: 'Angular',
      description: 'Повний курс по Angular Framework',
      level: 'Просунутий',
      duration: '20 годин',
      imageUrl: 'angular.jpg',
      featured: true
    };

    fixture.detectChanges();
  });

  it('повинен відображати назву курсу', () => {
    const titleEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleEl.textContent).toContain('Angular');
  });

  it('повинен показувати "⭐ Рекомендовано", якщо featured = true', () => {
    const recommendedEl = fixture.debugElement.query(By.css('.recommended'));
    expect(recommendedEl).toBeTruthy();
  });
});
