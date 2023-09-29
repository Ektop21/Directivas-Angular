import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  entradas: any[];


  constructor() {

    this.entradas = [

      { titulo: "Python cada dia mas presente" },
      { titulo: "Java presente desde hacemas de 20 years" },
      { titulo: "Kotlin potencia para tus apps" },
      { titulo: "JavaScript cada vez mas funciional" },
      { titulo: "Donde quedo pascal?" },
    ]


  }



  registrarUsuario() {

    this.registrado = true;

    this.mensaje = "Usuario Registrado con Exito "

  }
}
