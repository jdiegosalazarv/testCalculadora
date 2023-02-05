import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testCalc';
  numero1: number = 0;
  numero2: number = 0;

  sumar() :number{
    return this.numero1 + this.numero2;
  }

  restar(): number{
    return this.numero1 - this.numero2;
  }

  multiplicar(): number{
    return this.numero1 * this.numero2;
  }

  dividir(): number{
    if (this.numero2 == 0) {
      return this.numero2;
    }
    return this.numero1 / this.numero2;
  }
}
