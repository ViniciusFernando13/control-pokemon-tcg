import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poison-coin',
  templateUrl: './poison.component.html',
  styleUrls: ['./poison.component.scss'],
})
export class PoisonComponent implements OnInit {

  @Input() active:boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
