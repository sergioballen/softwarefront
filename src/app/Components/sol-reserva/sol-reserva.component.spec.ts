import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolReservaComponent } from './sol-reserva.component';

describe('SolReservaComponent', () => {
  let component: SolReservaComponent;
  let fixture: ComponentFixture<SolReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
