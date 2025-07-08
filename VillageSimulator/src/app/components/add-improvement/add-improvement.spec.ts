import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImprovement } from './add-improvement';

describe('AddImprovement', () => {
  let component: AddImprovement;
  let fixture: ComponentFixture<AddImprovement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddImprovement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImprovement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
