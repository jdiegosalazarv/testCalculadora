import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    component = new AppComponent();
  });

  it('El método sumar debe devolver la suma de numero1 + numero2', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    let result = 15;

    expect(component.sumar()).toBe(result);
  });

  it('El método restar debe devolver la resta de numero1 - numero2', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    let result = 5;

    expect(component.restar()).toBe(result);
  });

  it('El método multiplicar debe devolver la multiplicación de numero1 * numero2', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    let result = 50;

    expect(component.multiplicar()).toBe(result);
  });

  it('El método multiplicar debe devolver 0 cuando numero1 o numero2 sea 0', () => {
    component.numero1 = 10;
    component.numero2 = 0;
    let result = 0;

    expect(component.multiplicar()).toBe(result);
  });

  it('El método dividir debe devolver la división de numero1 / numero2', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    let result = 2;

    expect(component.dividir()).toBe(result);
  });

  it('El método dividir debe devolver 0 cuando numero1 0 numero2 sea igual a 0', () => {
    component.numero1 = 10;
    component.numero2 = 0;
    let result = 0;

    expect(component.dividir()).toBe(result);
  });

});
