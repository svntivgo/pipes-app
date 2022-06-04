import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'santiago';
  nombreUpper: string = 'SANTIAGO';
  nombreCompleto: string = 'SaNtiaGo BarREra';

  fecha: Date = new Date();

}
