import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irregulares',
  templateUrl: './irregulares.component.html',
  styleUrls: ['./irregulares.component.css']
})
export class IrregularesComponent implements OnInit {


  imagen1 = ['assets/img/sub0.png'];
  imagen2 = ['assets/img/sub1.jpg'];
  imagen3 = ['assets/img/sub2.jpg'];
  imagen4 = ['assets/img/sub3.jpg'];
  imagen5 = ['assets/img/sub4.jpg'];
  imagen6 = ['assets/img/sub5.jpg'];
  imagen7 = ['assets/img/sub6.jpg'];
  imagen8 = ['assets/img/sub7.jpg'];
  
  mostrar6(e){
    alert('Próxima: 26 de Mayo 2222');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
