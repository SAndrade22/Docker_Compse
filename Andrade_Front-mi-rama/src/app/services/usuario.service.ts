import { Usuario } from 'src/app/domain/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: Usuario) {
    return this.http.post<any>("http://localhost:8086/cliente", usuario);
  }
  
  

  getAll(){
    return this.http.get<any>("http://localhost:8086/cliente")
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8086/cliente/${id}`);
  }
  updateUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    const url = `http://localhost:8086/cliente/${id}`;
    return this.http.put<Usuario>(url, usuario);
  }
  getUsuarioById(id: string): Observable<Usuario> {
    const url = `http://localhost:8086/cliente/${id}`;
    return this.http.get<Usuario>(url);
  }
  

 

}

