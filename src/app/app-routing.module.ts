import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { NavUserComponent } from './Components/nav-user/nav-user.component';
import { DisponibilidadUserComponent } from './Components/disponibilidad-user/disponibilidad-user.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';
import { SolReservaComponent } from './Components/sol-reserva/sol-reserva.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"nav-user",component:NavUserComponent},
  {path:"disponibilidad",component:DisponibilidadUserComponent},
  {path:"gestion_user", component:GestionUserComponent},
  {path: "reserva",component: SolReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
