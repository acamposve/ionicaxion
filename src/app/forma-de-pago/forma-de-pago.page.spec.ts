import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormaDePagoPage } from './forma-de-pago.page';

describe('FormaDePagoPage', () => {
  let component: FormaDePagoPage;
  let fixture: ComponentFixture<FormaDePagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
