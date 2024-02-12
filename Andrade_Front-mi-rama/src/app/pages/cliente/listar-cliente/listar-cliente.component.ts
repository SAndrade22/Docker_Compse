import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario.model';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent {
  clientes: Usuario[] = [];

  constructor(private UsuarioService: UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.UsuarioService.getAll().subscribe(
      (data: Usuario[]) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }

  // Puedes implementar funciones para editar y eliminar aquí
  editarCliente(usuario: Usuario): void {
    // Obtener el id del usuario
    const usuarioId = usuario.id;
  
    // Redirigir al formulario de actualización con el id del usuario
    this.router.navigate(['/actualizar-usuario', usuarioId]);
  }
  

  eliminarCliente(cliente: Usuario) {
    if (cliente.id) {
      const confirmacion = confirm('¿Estás seguro de eliminar este cliente?');

      if (confirmacion) {
        this.UsuarioService.eliminar(cliente.id).subscribe(
          () => {
            console.log('Cliente eliminado correctamente.');
            // Actualizar la lista de clientes después de la eliminación
            this.obtenerClientes();
          },
          (error) => {
            console.error('Error al eliminar el cliente:', error);
          }
        );
      }
    } else {
      console.error('El cliente no tiene un ID definido.');
    }
  }
}