import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdmonComponent } from './crud-admon.component';

describe('CrudAdmonComponent', () => {
  let component: CrudAdmonComponent;
  let fixture: ComponentFixture<CrudAdmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAdmonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
