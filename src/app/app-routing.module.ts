import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEscritoresComponent } from './detalle-escritores/detalle-escritores.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/escritores'
  },
  {
    path: 'escritores',
    component: ListaEscritoresComponent
  },
  {
    path: 'escritores/:escritorId',
    component: DetalleEscritoresComponent,
    children: [
      {
        path: 'libros',
        component: ListaLibrosComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/escritores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
