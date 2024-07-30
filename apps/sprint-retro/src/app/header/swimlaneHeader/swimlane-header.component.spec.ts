import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwimlaneHeaderComponent } from './swimlane-header.component';

describe('SwimlaneHeaderComponent', () => {
  let component: SwimlaneHeaderComponent;
  let fixture: ComponentFixture<SwimlaneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwimlaneHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwimlaneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
