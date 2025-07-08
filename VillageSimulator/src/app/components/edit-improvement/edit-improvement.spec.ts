import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImprovement } from './edit-improvement';

describe('EditImprovement', () => {
  let component: EditImprovement;
  let fixture: ComponentFixture<EditImprovement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditImprovement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImprovement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
