import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwimlaneSectionComponent } from './swimlane-section.component';

describe('SwimlaneSectionComponent', () => {
  let component: SwimlaneSectionComponent;
  let fixture: ComponentFixture<SwimlaneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwimlaneSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwimlaneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
