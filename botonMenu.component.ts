import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

interface linkInterface {
  nombre: string;
  url: string;
  icono:string;
}

@Component({
  selector: 'app-boton-menu',
  imports: [
    RouterLink,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule],
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss'],
})
export class BotonMenuComponent {

  @Input() conector: linkInterface;

}
