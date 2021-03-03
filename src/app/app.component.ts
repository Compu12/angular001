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
  activado:boolean=true;
  cadenaTexto:string="Ingrese su nombre";  

  rutaImagen:string= "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

//event binding
  textoEventBinding:string="Este es un ejemplo de event Binding";
  //two data binding
  cadenaTwodataBinding:string='FISEI';
  constructor (){
    setInterval(()=>(this.activado=false),3000); //a los 3 segundos cambia de estado
  }


  sumar(valor1:number, valor2: number){
  return valor1+valor2;
  }
  mostrarMensaje(){
    return "Cadena de Texto"
  }

  cambiarTexto():void{
    this.textoEventBinding="El texto ha sido cambiado por un event binding";
  }



 

}

