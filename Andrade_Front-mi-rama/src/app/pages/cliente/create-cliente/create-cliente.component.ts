import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from 'src/app/domain/usuario.model';
import { Component , OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent implements OnInit {
  Usuario: Usuario = {
    nombre: '',
    email: '',
    telefono: '',
   
  };

  constructor(private router: Router,private _snackBar: MatSnackBar,private UsuarioService: UsuarioService) {

  }

  ngOnInit(): void {
  }

  onSubmit(registerForm: { valid: any; }) {
    if (!registerForm.valid) {
      console.log('Formulario no válido');
      return;
    }
  
    this.UsuarioService.saveUsuario(this.Usuario).subscribe(
      response => {
        if (response.codigo) { // si response.codigo existe, hay un error
          this._snackBar.open(`Error al crear usuario: ${response.mensaje}`, 'Cerrar', {
            duration: 2000,
          });
        } else {
          this._snackBar.open('Usuario creado con éxito', 'Cerrar', {
            duration: 2000,
          });
          this.Usuario = { nombre: '', email: '' , telefono: ''};
        }
      },
      error => {
        console.error('Error al crear cliente:', error);  // Agregar esta línea para imprimir el error en la consola
        this._snackBar.open(`Error al crear cliente: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }
}  