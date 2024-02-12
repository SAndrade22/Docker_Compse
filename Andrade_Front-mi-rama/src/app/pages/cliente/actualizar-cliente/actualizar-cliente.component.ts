import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.scss']
})
export class ActualizarClienteComponent {
  Usuario: Usuario = {
    id:'',
    nombre: '',
    email: '',
    telefono: '',
  };

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const usuarioId = this.route.snapshot.params['id'];
        this.usuarioService.getUsuarioById(usuarioId).subscribe(
      (usuario) => {
        this.Usuario = usuario;
      },
      (error) => {
        console.error('Error al obtener usuario:', error);
      }
    );
  }

  onSubmit(registerForm: { valid: any; }) {
    if (!registerForm.valid) {
      console.log('Formulario no válido');
      return;
    }
  
    this.usuarioService.saveUsuario(this.Usuario).subscribe(
      (response: any) => {
        if (response.codigo) {
          this._snackBar.open(`Error al crear usuario: ${response.mensaje}`, 'Cerrar', {
            duration: 2000,
          });
        } else {
          this._snackBar.open('Usuario creado con éxito', 'Cerrar', {
            duration: 2000,
          });
          this.router.navigate(['/listar-cliente']);
        }
      },
      (error) => {
        console.error('Error al crear cliente:', error);
        this._snackBar.open(`Error al crear cliente: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      }
    );
  

    }
   }
  