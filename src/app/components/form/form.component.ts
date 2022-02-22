import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  qntProd!: number
  valor: number
  tamanhos!: string
  cores!: string
  total!: number
  frete!: string


  constructor() {
    this.valor = 39
   }

  ngOnInit(): void {
  }

  calcularValor(){
    if(this.frete=='frete1'){
      this.total=(this.qntProd*39)+10
    }else{
      this.total=(this.qntProd*39)+30
    }
  }

}
