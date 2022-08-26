import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';



@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  username!: string
  password!: string
  


  constructor( public userService: UsersService, public router: Router, private fb:FormBuilder ) { }
  hide = true

  miformulario:FormGroup=this.fb.group({

    'username': ['',[Validators.required]],
    'password': ['',[Validators.required,Validators.minLength(5)]],
})

  campoValido(campo:string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched
  }

  Acceder(){
    const user = { username:this.miformulario.value.username, password:this.miformulario.value.password,};
    console.log(this.miformulario.value)
    this.userService.Acceder(user).subscribe(
      data =>{
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
        window.open('http://localhost:4200/principal')
    })

  }

  guardar(){
    if (this.miformulario.invalid){
      this.miformulario.markAllAsTouched()
      return
    }
    this.miformulario.reset()
  }


  ngOnInit(): void {
  }

}
