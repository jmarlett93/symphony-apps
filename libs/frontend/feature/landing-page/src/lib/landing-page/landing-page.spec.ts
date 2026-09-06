import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('communicates the product value and joining model', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain(
      'Turn your next team call into',
    );
    expect(element.textContent).toContain('no downloads or accounts required');
    expect(element.querySelectorAll('.btr-benefit-card')).toHaveLength(3);
  });

  it('uses labelled sections and semantic steps', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(
      element.querySelector('#how-it-works')?.getAttribute('aria-labelledby'),
    ).toBe('steps-heading');
    expect(element.querySelectorAll('ol > li')).toHaveLength(3);
    expect(element.querySelector('#rally-partners')).not.toBeNull();
  });
});
