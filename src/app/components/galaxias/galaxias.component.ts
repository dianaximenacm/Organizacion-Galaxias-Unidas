import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galaxias',
  templateUrl: './galaxias.component.html',
  styleUrls: ['./galaxias.component.css']
})
export class GalaxiasComponent implements OnInit {

  imagen1 = ['assets/img/comun1.jpg'];
  imagen2 = ['assets/img/comun2.jpg'];
  imagen3 = ['assets/img/comun3.jpg'];
  imagen4 = ['assets/img/comun4.jpg'];
  imagen5 = ['assets/img/nos1.jpg'];
  imagen6 = ['assets/img/nos2.jpg'];
  imagen7 = ['assets/img/nos3.jpg'];

  
mostrar1(e){
  prompt('Escribe tu numero de registro galactico');
  prompt('Escribe tu consulta');
  alert('Tu consulta ha sido registrada con el número : 8958768545');
}





  constructor() { }

  ngOnInit(): void {
  }

}

