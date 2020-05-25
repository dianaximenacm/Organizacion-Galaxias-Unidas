import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elipticas',
  templateUrl: './elipticas.component.html',
  styleUrls: ['./elipticas.component.css']
})
export class ElipticasComponent implements OnInit {

  imagen1 = ['assets/img/em_1.jpg'];
  imagen2 = ['assets/img/em_2.jpg'];
  imagen3 = ['assets/img/em_3.jpg'];
  imagen4 = ['assets/img/em_4.jpg'];
  imagen5 = ['assets/img/as1.jpg'];
  imagen6 = ['assets/img/as2.jpg'];
  imagen7 = ['assets/img/as3.jpg'];
  imagen8 = ['assets/img/as4.jpg'];


  imagenoti1 = ['assets/img/moe.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
