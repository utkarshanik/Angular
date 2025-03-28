import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVarComponent } from './contextual-var.component';

describe('ContextualVarComponent', () => {
  let component: ContextualVarComponent;
  let fixture: ComponentFixture<ContextualVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
