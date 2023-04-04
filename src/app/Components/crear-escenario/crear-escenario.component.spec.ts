import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEscenarioComponent } from './crear-escenario.component';

describe('CrearEscenarioComponent', () => {
  let component: CrearEscenarioComponent;
  let fixture: ComponentFixture<CrearEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEscenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
