import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTask2Component } from './event-task2.component';

describe('EventTask2Component', () => {
  let component: EventTask2Component;
  let fixture: ComponentFixture<EventTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTask2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
