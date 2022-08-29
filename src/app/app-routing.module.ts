import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./FrontEnd/login/login.component";
import { AccessComponent } from "./FrontEnd/access/access.component";
import { PrincipalComponent } from "./FrontEnd/principal/principal.component";
import { HomeComponent } from "./FrontEnd/home/home.component";
import { MessagesComponent } from "./FrontEnd/messages/messages.component";

const routes: Routes = [
  { path: "register", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: AccessComponent, pathMatch: "full" },
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: 'principal', component: PrincipalComponent, pathMatch:'full'},
  { path: 'home', component: HomeComponent, pathMatch:'full'},
  { path: 'messages', component: MessagesComponent, pathMatch:'full'},
  {path: '**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })



export class AppRoutingModule {}