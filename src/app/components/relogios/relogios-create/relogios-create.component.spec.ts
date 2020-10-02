import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogiosCreateComponent } from './relogios-create.component';

describe('RelogiosCreateComponent', () => {
  let component: RelogiosCreateComponent;
  let fixture: ComponentFixture<RelogiosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogiosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogiosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
