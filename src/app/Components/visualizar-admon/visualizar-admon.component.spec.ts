import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAdmonComponent } from './visualizar-admon.component';

describe('VisualizarAdmonComponent', () => {
  let component: VisualizarAdmonComponent;
  let fixture: ComponentFixture<VisualizarAdmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarAdmonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
