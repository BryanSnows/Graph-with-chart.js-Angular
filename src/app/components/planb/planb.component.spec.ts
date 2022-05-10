import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbComponent } from './planb.component';

describe('PlanbComponent', () => {
  let component: PlanbComponent;
  let fixture: ComponentFixture<PlanbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
