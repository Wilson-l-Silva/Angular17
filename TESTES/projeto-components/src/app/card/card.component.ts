import { Component } from '@angular/core';


interface Iplano{
  infos: Iinfos;
}

interface Iinfos{
  tipo: string,
  preco: number,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  //ignora qualquer verificação de tipagem
  //@ts-ignore
  plano: Iplano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  }
}
