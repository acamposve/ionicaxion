import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionCompraPage } from './confirmacion-compra.page';

describe('ConfirmacionCompraPage', () => {
  let component: ConfirmacionCompraPage;
  let fixture: ComponentFixture<ConfirmacionCompraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
