import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogiosUpdateComponent } from './relogios-update.component';

describe('RelogiosUpdateComponent', () => {
  let component: RelogiosUpdateComponent;
  let fixture: ComponentFixture<RelogiosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogiosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogiosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
