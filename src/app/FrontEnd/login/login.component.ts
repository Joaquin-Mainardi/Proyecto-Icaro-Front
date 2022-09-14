import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true
  firstname!: string;
  lastname!: string;
  password!:string;
  username!: string;
  city!:string;
  country!:string;
  miform: any;
  durationInSeconds = 5;



  constructor( public userService: UsersService, public router: Router, private fb:FormBuilder, private snackBar: MatSnackBar) {}
 
  ngOnInit(): void {
  }



  miformulario:FormGroup=this.fb.group({
    'firstname': ['',[Validators.required]],
    'lastname': ['',[Validators.required]],
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required,Validators.minLength(6),]],
    'country': ['',[Validators.required]],
    'city': ['',[Validators.required]],
  })

  //validaciones
  campoValido(campo:string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched }

    guardar(){
      if (this.miformulario.invalid){
      this.miformulario.markAllAsTouched()
      this.miformulario.reset()
      return;
      }
      this.router.navigateByUrl('/principal')}

   registerUser(){
    const user = {username: this.miformulario.value.username, firstname: this.miformulario.value.firstname, lastname: this.miformulario.value.lastname, password:this.miformulario.value.password, country:this.miformulario.value.country, city:this.miformulario.value.city};
    this.userService.registerUser(user).subscribe(data =>{
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/principal');
    })
  }

}

