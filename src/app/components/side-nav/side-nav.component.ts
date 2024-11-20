import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent{
  isDrawerOpen: boolean = true;

  marginDrawer: boolean = true;

  @Output() updatedDrawer = new EventEmitter <boolean> ();

  postData() {
    this.marginDrawer = !this.marginDrawer;
    this.updatedDrawer.emit(this.marginDrawer);
  };

}
