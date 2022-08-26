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
  firstName!: string;
  lastName!: string;
  password!:string;
  username!: string;
  city!:string;
  country!:string;



  constructor( public userService: UsersService, public router: Router, private fb:FormBuilder, private snackBar: MatSnackBar) {}
 
  ngOnInit(): void {
  }



  miformulario:FormGroup=this.fb.group({
    'firstName': ['',[Validators.required]],
    'lastName': ['',[Validators.required]],
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required,Validators.minLength(6),]],
    'country': ['',[Validators.required]],
    'city': ['',[Validators.required]],
  })


  campoValido(campo:string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched
  }

  guardar(){

    if (this.miformulario.invalid){
    this.miformulario.markAllAsTouched()
    this.miformulario.reset()
    }
  }




   registerUser(){
    const user = {username: this.miformulario.value.username, firstName: this.miformulario.value.firstName, lastName: this.miformulario.value.lastName, password:this.miformulario.value.password, country:this.miformulario.value.country, city:this.miformulario.value.city};
    console.log(this.miformulario.value)
    this.userService.registerUser(user).subscribe(data =>{
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/principal');
    })
  }

}

