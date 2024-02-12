import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes del Cliente
import { CreateClienteComponent } from './pages/cliente/create-cliente/create-cliente.component';






//Componentes Home
import { HomeComponent } from './pages/home/home.component';
import { ActualizarClienteComponent } from './pages/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoActualizarComponent } from './pages/producto/producto-actualizar/producto-actualizar.component';


const routes: Routes = [
 
  //Cliente
  {path: 'crearC',component: CreateClienteComponent},
  { path: 'actualizar-usuario/:id', component: ActualizarClienteComponent },
  { path: 'listar-cliente', component: ListarClienteComponent },


//producto
{path: 'crearP',component: ProductoComponent},
{path: 'listar-producto',component: ListarProductoComponent},
{ path: 'actualizar-producto/:id', component: ProductoActualizarComponent },


  //Home
  {path: 'inicio',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
