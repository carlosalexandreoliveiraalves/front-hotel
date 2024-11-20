import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SistemaHotel';


  isDrawerOpen = true;

  onDrawerUpdate(status: boolean) {
    this.isDrawerOpen = status;
    console.log('Status do Drawer recebido:', status, this.isDrawerOpen);


  }
}
