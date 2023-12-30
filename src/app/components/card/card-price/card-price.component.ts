import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  constructor() { }

  @Input()
  gamePrice: string = ""
  @Input()
  gameConsole: string = ""
  @Input()
  gameTitle: string = ""
  @Input()
  gameMode: string = ""
  @Input()
  gameOriginalPrice: string = ""

  ngOnInit(): void {
  }

}
