import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  username!: string
  password!: string
  durationInSeconds = 5;
  UserService: any;

  constructor( public userService: UsersService, public router: Router, private fb:FormBuilder, private snackBar: MatSnackBar ) { }
 

  hide = true

  miformularioLogin:FormGroup=this.fb.group({
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required,Validators.minLength(5)]],
})

  campoValido(campo:string){
    return this.miformularioLogin.controls[campo].errors && this.miformularioLogin.controls[campo].touched
  }

  guardar() {
    if (this.miformularioLogin.invalid) {
        this.miformularioLogin.markAllAsTouched();
      return;
    }
    this.router.navigateByUrl('/principal');
}

    Acceder(){
      const user = { username:this.miformularioLogin.value.username, password:this.miformularioLogin.value.password,};
      console.log(this.miformularioLogin.value)
      this.userService.Acceder(user).subscribe(data =>{
        this.userService.setToken(data.token);
        
      })
    }

  openSnackBar() { 
            this.snackBar.open('Usuario logueado con exito', 'cerrar'),{
            duration: this.durationInSeconds * 1000,
            }
          }

          
  ngOnInit(): void {} 
          
          
          
          
}



