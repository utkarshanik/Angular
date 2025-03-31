import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusecompoComponent } from './reusecompo.component';

describe('ReusecompoComponent', () => {
  let component: ReusecompoComponent;
  let fixture: ComponentFixture<ReusecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusecompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
