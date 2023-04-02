import { Component , ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent {
  columnas: string[] = ['ID', 'Fecha', 'Hora','Nom_Escenario','Acciones'];

  datos: Articulo[] = [new Articulo(1, '22/04/23', '8:00 am',"Fut sala1"),

];

articuloselect: Articulo = new Articulo(0, "", "","");

@ViewChild(MatTable) tabla1!: MatTable<Articulo>;



}


export class Articulo {
constructor(public ID: number, public Fecha: string, public Hora: string, public Nom_Escenario: string) {
}

}
