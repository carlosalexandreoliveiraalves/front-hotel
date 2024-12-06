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

  luxousRoom: luxousRoomList[] = []; //filtrar informaç~eos da tabela
  luxousRoomDiverse: luxousRoomList[] = [];

  occupiedRoom: luxousRoomList[] = [];


  //injeção de depêndencia, acesso a todos os métodos em service
  constructor(private serviceLuxousRoom:LuxousRoomService) {}

  ngOnInit(): void {
    this.serviceLuxousRoom.GetLuxousRoom().subscribe(response => {
      this.luxousRoom = response;
      this.luxousRoomDiverse = response;
      console.log(response); //Verificar o que está vindo
    });

    this.occupiedRoom = this.luxousRoomDiverse.filter(item => item.disponivel == false);
    console.log(this.occupiedRoom);


  }
  //Deve utilizar o tipo "subscribe" para um retorno "observable"




}
