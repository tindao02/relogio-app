import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogiosReadComponent } from './relogios-read.component';

describe('RelogiosReadComponent', () => {
  let component: RelogiosReadComponent;
  let fixture: ComponentFixture<RelogiosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogiosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogiosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
