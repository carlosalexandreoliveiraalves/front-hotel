import { luxousRoomList } from './../../models/luxousRoom';
import { LuxousRoomService } from './../../services/luxous-room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxous-room',
  standalone: true,
  imports: [],
  templateUrl: './luxous-room.component.html',
  styleUrl: './luxous-room.component.scss'
})
export class LuxousRoomComponent implements OnInit {

  luxousRooms: luxousRoomList[] = []; //filtrar informaç~eos da tabela
  luxousRoomDiverse: luxousRoomList[] = [];

  //injeção de depêndencia, acesso a todos os métodos em service
  constructor(private serviceLuxousRoom:LuxousRoomService) {}

  ngOnInit(): void {
    this.serviceLuxousRoom.GetLuxousRoom().subscribe(response => {
      this.luxousRooms = response;
      this.luxousRoomDiverse = response;
      console.log(response); //Verificar o que está vindo
    });
  }
  //Deve utilizar o tipo "subscribe" para um retorno "observable"




}
