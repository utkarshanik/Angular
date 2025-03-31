import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentTochildComponent } from './parrent-tochild.component';

describe('ParrentTochildComponent', () => {
  let component: ParrentTochildComponent;
  let fixture: ComponentFixture<ParrentTochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrentTochildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrentTochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
