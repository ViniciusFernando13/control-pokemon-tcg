import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {

  @Input() active:boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
