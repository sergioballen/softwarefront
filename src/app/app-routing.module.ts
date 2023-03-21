import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { NavUserComponent } from './Components/nav-user/nav-user.component';
import { DisponibilidadUserComponent } from './Components/disponibilidad-user/disponibilidad-user.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"nav-user",component:NavUserComponent},
  {path:"disponibilidad",component:DisponibilidadUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
