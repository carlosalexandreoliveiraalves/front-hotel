import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LuxousRoomComponent } from './pages/luxous-room/luxous-room.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "luxousRoom",
    component: LuxousRoomComponent
  }

];
