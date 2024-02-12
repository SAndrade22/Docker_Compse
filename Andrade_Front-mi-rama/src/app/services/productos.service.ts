import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  saveProducto(producto: Producto) {
    return this.http.post<any>("http://localhost:8085/ropas", producto);
  }
  
  getAll(){
    return this.http.get<any>("http://localhost:8085/ropas")
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/ropas/${id}`);
  }
  updateProducto(id: string, producto: Producto): Observable<Producto> {
    const url = `http://localhost:8085/ropas/${id}`;
    return this.http.put<Producto>(url, producto);
  }
  getProductoById(id: string): Observable<Producto> {
    const url = `http://localhost:8085/ropas/${id}`;
    return this.http.get<Producto>(url);
  }
  

 

}
