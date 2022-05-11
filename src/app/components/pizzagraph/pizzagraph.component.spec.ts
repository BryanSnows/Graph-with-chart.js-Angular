import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzagraphComponent } from './pizzagraph.component';

describe('PizzagraphComponent', () => {
  let component: PizzagraphComponent;
  let fixture: ComponentFixture<PizzagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
