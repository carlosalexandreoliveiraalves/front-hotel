import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 4, color: '#0F9D58'},
    {text: 'Two', cols: 1, rows: 8, color: '#4285F4'},
    {text: 'Three', cols: 1, rows: 4, color: '#DB4437'},
    {text: 'Four', cols: 2, rows: 4, color: '#F4B400'},
  ];
}

