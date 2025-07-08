import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLine } from './resource-line';

describe('ResourceLine', () => {
  let component: ResourceLine;
  let fixture: ComponentFixture<ResourceLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
