import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

}
