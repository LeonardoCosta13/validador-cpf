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
    console.log(this.cpf);
    this.cpf = valor;
    console.log(this.cpf);
    if(valor.length > 5){
      alert("Digite um valor menor")
    }
  }
}

