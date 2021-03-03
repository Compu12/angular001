import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular001';
  diaSemana : string = "Martes";
  nombre:string= 'Xavier';
  apellido:string= 'Cañizares';

  cadenaTexto:string="Ingrese su nombre";  
  sumar(valor1:number, valor2: number){
  return valor1+valor2;
  }
  mostrarMensaje(){
    return "Cadena de Texto"
  }

}
