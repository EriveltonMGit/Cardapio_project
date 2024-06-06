import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3Component } from './section-3.component';

describe('Section3Component', () => {
  let component: Section3Component;
  let fixture: ComponentFixture<Section3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
