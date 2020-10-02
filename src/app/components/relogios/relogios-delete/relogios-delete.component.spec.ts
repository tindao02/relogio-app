import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogiosDeleteComponent } from './relogios-delete.component';

describe('RelogiosDeleteComponent', () => {
  let component: RelogiosDeleteComponent;
  let fixture: ComponentFixture<RelogiosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogiosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogiosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
