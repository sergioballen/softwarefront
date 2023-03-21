import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadUserComponent } from './disponibilidad-user.component';

describe('DisponibilidadUserComponent', () => {
  let component: DisponibilidadUserComponent;
  let fixture: ComponentFixture<DisponibilidadUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilidadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
