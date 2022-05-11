import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-add-item',
  templateUrl: './card-add-item.component.html',
  styleUrls: ['./card-add-item.component.css']
})
export class CardAddItemComponent implements OnInit {

  constructor() { }

  title: string = 'Bronx Magnífico Bruttos Maximus';
  price: string = 'R$30,00';
  detail: string = '3 hambúrgueres de 320g de alcatra, Alface, Tomate, Mussarela, Bacon, Cheddar, 3 Ovos, Pepperoni, Provolone, Onion rings, Picles, Cebola roxa, e molho molho mix mac e nosso barbecue artesanal. Obs ( esse burger pode causar atraso na sua entrega devido ao tamanho e não temos como fazer muito rápido para não ficar cru )';

  ngOnInit(): void {
  }

}
