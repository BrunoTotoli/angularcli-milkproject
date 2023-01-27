import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkFormComponent } from './milk-form.component';

describe('MilkFormComponent', () => {
  let component: MilkFormComponent;
  let fixture: ComponentFixture<MilkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
