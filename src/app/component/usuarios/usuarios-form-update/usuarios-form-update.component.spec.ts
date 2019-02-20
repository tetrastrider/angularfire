import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFormUpdateComponent } from './usuarios-form-update.component';

describe('UsuariosFormUpdateComponent', () => {
  let component: UsuariosFormUpdateComponent;
  let fixture: ComponentFixture<UsuariosFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
