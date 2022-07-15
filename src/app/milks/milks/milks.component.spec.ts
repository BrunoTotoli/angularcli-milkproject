import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilksComponent } from './milks.component';

describe('MilksComponent', () => {
  let component: MilksComponent;
  let fixture: ComponentFixture<MilksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
