import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  
mostrar5(e){
  prompt('Escribe tu numero de registro galactico');
  prompt('Escribe tu mensaje');
  alert('Tu mensaje ha sido registrado con el número : 9984094');
}


  constructor() { }

  ngOnInit(): void {
  }

}
