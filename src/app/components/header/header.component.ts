import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  imagen = ['assets/img/logo.png'];

  ingreso(e){
    var login = document.getElementById("login");
    var logout = document.getElementById("logout");
    var loginUser = document.getElementById("titulo-bienvenida");
    
    if (localStorage.getItem('name')) {
        loginUser.innerHTML = "Super Bienvenida para "+localStorage.getItem( 'name' )+ " de parte de la organización de galaxias unidas (OGU)"
    }
    
    function login1() {
        var user = prompt("Escribe tu nombre");
        if (user == null || user == "") {
            alert("Ups! Olvidaste ingresar la info solicitada")
        } else {
            localStorage.setItem('name', user);
            loginUser.innerHTML = "Bienvenido "+localStorage.getItem( 'name ' )+ "de parte de la organización de galaxias unidas (OGU)";
    
        }
    }
    
    function logout1() {
        loginUser.innerHTML = "Bienvenido";
        localStorage.clear();
    }
 
}

  
}

