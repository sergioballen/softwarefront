/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Crud_UserComponent } from './Crud_User.component';

describe('Crud_UserComponent', () => {
  let component: Crud_UserComponent;
  let fixture: ComponentFixture<Crud_UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud_UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud_UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
