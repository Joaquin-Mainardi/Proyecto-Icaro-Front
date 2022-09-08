import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Users/users.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  receiverId!: string;
  text!: string;
  senderId!:string
  
  ngOnInit(): void {
    this.userService.postMessage
  }

  constructor(public userService: UsersService,public router: Router, private fb:FormBuilder) {}

  mensaje: FormGroup = this.fb.group ({
    'receiverId': ['',[Validators.required]],
    'text': ['',[Validators.required, Validators.maxLength(144)]],
    'senderId': ['',[ Validators.required]]
  }) 
  validar(campo: string) {
    return this.mensaje.controls[campo]?.errors && this.mensaje.controls[campo]?.touched
  }
  sendMsg() {
    if (this.mensaje.invalid) {
      this.mensaje.markAllAsTouched();
      return;
    }}

  postMessage(){
    const mensaje = { receiverId: this.mensaje.value.receiverId, senderId: this.mensaje.value.senderId, text: this.mensaje.value.text}
      this.userService.postMessage(mensaje).subscribe(data =>{
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/principal');
  }


)}}

