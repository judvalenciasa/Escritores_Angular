import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEscritoresComponent } from './detalle-escritores.component';

describe('DetalleEscritoresComponent', () => {
  let component: DetalleEscritoresComponent;
  let fixture: ComponentFixture<DetalleEscritoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEscritoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEscritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
