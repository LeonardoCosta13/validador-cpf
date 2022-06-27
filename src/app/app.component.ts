import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validador-cpf';
  cpf: any;


  validar(valor: any){
    if(valor.length >= 11){
      alert("Cpf ok")
      console.log(valor, this.cpf);
      return;
    };
    console.log(this.cpf);
    this.cpf = valor;
    console.log(this.cpf);
  
  }
}

