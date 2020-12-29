import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'burn-coin',
  templateUrl: './burn.component.html',
  styleUrls: ['./burn.component.scss'],
})
export class BurnComponent implements OnInit {

  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {}

}
