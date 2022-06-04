import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Juan';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    otro: 'invitarlo/a',
  };

  //i18nPlural
  clientes: string[] = ['Camila', 'Juan', 'Pedro', 'María', 'José'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: 'Calle falsa 123'
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Flash',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });


}
