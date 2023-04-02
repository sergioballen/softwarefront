import { Component } from '@angular/core';


@Component({
  selector: 'app-sol-reserva',
  templateUrl: './sol-reserva.component.html',
  styleUrls: ['./sol-reserva.component.css']
})
export class SolReservaComponent {
  handleItemClick(event: MouseEvent) {
    console.log('Item clicked:', event.target);
}
}
