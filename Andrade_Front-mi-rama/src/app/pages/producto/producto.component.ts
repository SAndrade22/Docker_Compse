import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from './../../services/productos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  nuevoP: any = {};

  constructor(private ProductosService: ProductosService, private snackBar: MatSnackBar) {}

  registrarProducto() {
    this.ProductosService.saveProducto(this.nuevoP).subscribe(
      (data) => {
        this.snackBar.open('Producto registrado con éxito', 'ok', {
          duration: 3000,
        });
        console.log('Producto registrado con éxito:', data);
        this.nuevoP = {}; // Reinicia el objeto después de registrar
      },
      (error) => {
        console.error('Error al registrar el producto:', error);
      }
    );
  }
}