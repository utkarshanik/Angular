import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetseteventTask3Component } from './getsetevent-task3.component';

describe('GetseteventTask3Component', () => {
  let component: GetseteventTask3Component;
  let fixture: ComponentFixture<GetseteventTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetseteventTask3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetseteventTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
