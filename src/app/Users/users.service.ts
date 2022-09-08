import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { UsuariosRx } from "../usuarios-rx";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  getUser() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient, private cookies: CookieService) {}

  registerUser(user: {username:string; firstname: string; lastname: string; password: string; country: string; city: string }): Observable<any> {
    return this.http.post("http://localhost:3000/api/users", user);
  }
  
  Acceder(user: {username:string; password: string}): Observable<any> {
    return this.http.post("http://localhost:3000/api/login", user);
}

  postMessage(mensaje: { receiverId:string, text:string, senderId:string}): Observable<any>{
    return this.http.post("http://localhost:3000/api/users/:username/messages", mensaje)
}

setToken(token: any) {
  this.cookies.set("token", token);
}
getToken() {
  return this.cookies.get("token");
}
getAllUsers(): Observable<UsuariosRx[]> {
  return this.http.get<UsuariosRx[]>('api/users')
}

getUserLogged() {
  const token = this.getToken();
  console.log(token)
  
}}