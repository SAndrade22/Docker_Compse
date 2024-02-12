import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-actualizar',
  templateUrl: './producto-actualizar.component.html',
  styleUrls: ['./producto-actualizar.component.scss']
})
export class ProductoActualizarComponent {

  nuevoP: any = {};

  constructor(
    private productosService: ProductosService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto de los parámetros de la ruta
    const productoId = this.route.snapshot.params['id'];

    if (productoId) {
      // Si hay un ID, significa que estamos actualizando, entonces obtenemos el producto por su ID
      this.productosService.getProductoById(productoId).subscribe(
        (producto) => {
          this.nuevoP = producto;
        },
        (error) => {
          console.error('Error al obtener producto:', error);
        }
      );
    }
  }

  guardarProducto() {
    // Verificar si estamos actualizando o registrando
    if (this.nuevoP.id) {
      // Actualizar el producto existente
      this.productosService.updateProducto(this.nuevoP.id, this.nuevoP).subscribe(
        (data) => {
          this.snackBar.open('Producto actualizado con éxito', 'ok', {
            duration: 3000,
          });
          console.log('Producto actualizado con éxito:', data);
          // Redirigir a la tabla después de guardar
          this.router.navigate(['/listar-producto']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
        }
      );
    } else {
      // Registrar un nuevo producto
      this.productosService.saveProducto(this.nuevoP).subscribe(
        (data) => {
          this.snackBar.open('Producto registrado con éxito', 'ok', {
            duration: 3000,
          });
          console.log('Producto registrado con éxito:', data);
          this.nuevoP = {}; // Reiniciar el objeto después de registrar
          this.router.navigate(['/listar-productos']); // Redirigir a la lista de productos después del registro
        },
        (error) => {
          console.error('Error al registrar el producto:', error);
        }
      );
    }
  }
}