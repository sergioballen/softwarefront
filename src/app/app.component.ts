import { Component } from '@angular/core';
import { ListarEscService } from './service/listar-esc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prestamosEscenarios';

  constructor(
    public listar:ListarEscService,
  ){

  }
}
