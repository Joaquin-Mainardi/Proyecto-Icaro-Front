import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './FrontEnd/login/login.component';
import { AccessComponent } from './FrontEnd/access/access.component';
import { PrincipalComponent } from './FrontEnd/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HeaderComponent } from './FrontEnd/header/header.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './FrontEnd/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MessagesComponent } from './FrontEnd/messages/messages.component';
import { UsersService } from './Users/users.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessComponent,
    PrincipalComponent,
    HeaderComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [CookieService, UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
