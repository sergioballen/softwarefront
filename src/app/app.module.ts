import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BarraLateralComponent } from './Components/barra-lateral/barra-lateral.component';
import { HomeComponent } from './Components/home/home.component';
import { NavUserComponent } from './Components/nav-user/nav-user.component';
import { DisponibilidadUserComponent } from './Components/disponibilidad-user/disponibilidad-user.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';
import { SolReservaComponent } from './Components/sol-reserva/sol-reserva.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CrudUserComponent } from './Components/crud-user/crud-user.component';
import { CrudAdmonComponent } from './Components/crud-admon/crud-admon.component';
import { CrearEscenarioComponent } from './Components/crear-escenario/crear-escenario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraLateralComponent,
    HomeComponent,
    NavUserComponent,
    DisponibilidadUserComponent,
    GestionUserComponent,
    SolReservaComponent,
    CrudUserComponent,
    CrudAdmonComponent,
    CrearEscenarioComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
  
 
  ],
  providers: [ 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
