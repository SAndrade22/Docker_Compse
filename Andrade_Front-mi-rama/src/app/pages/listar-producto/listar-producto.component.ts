import { Router } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/domain/producto.model';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent {
  productosList: any[] = [];

  constructor(private productosService: ProductosService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.getAll().subscribe(
      (data) => {
        this.productosList = data;
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }
  editarProducto(producto: any): void {
    // Lógica para redirigir a la página de edición con el ID del producto
    // Utiliza el router para navegar a la página de edición con el ID del producto
    this.router.navigate(['/actualizar-producto', producto.id]);
  }
  eliminarProducto(id: string): void {
    this.productosService.eliminar(id).subscribe(
      () => {
        this.snackBar.open('Producto eliminado con éxito', 'ok', {
          duration: 3000,
        });
        this.cargarProductos(); // Vuelve a cargar la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }
}