import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ApplicationShell } from './application-shell';

describe('ApplicationShell', () => {
  let component: ApplicationShell;
  let fixture: ComponentFixture<ApplicationShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationShell],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('provides accessible navigation and main content landmarks', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('nav')?.getAttribute('aria-label')).toBe(
      'Primary navigation',
    );
    expect(element.querySelector('main')?.id).toBe('main-content');
    expect(element.querySelector('.skip-link')?.getAttribute('href')).toBe(
      '#main-content',
    );
  });
});
