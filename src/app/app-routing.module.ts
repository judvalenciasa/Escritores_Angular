import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/escritores'
  },
  {
    path:'escritores',
    component:ListaEscritoresComponent
  },
  {
    path:'**',
    redirectTo:'/escritores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
