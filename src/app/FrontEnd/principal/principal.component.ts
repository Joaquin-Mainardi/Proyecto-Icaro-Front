import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';



export interface PeriodicElement {
  Remitente: string;
  Destinatario: string;
  Fecha: number;
  Mensaje: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
  receiverId!: string
  text!: string
  
  constructor( private fb:FormBuilder, public router: Router) {}


  ngOnInit(): void {
  }



  displayedColumns: string[] = ['Remitente', 'Destinatario', 'Fecha', 'Mensaje'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  // router: any;

  nuevoMensaje(){
    this.router.navigateByUrl('/messages');
  }

  getSentMessages() { }
  getReceivedMessages() {}


  salir(){
    this.router.navigateByUrl('/');
    }

}
