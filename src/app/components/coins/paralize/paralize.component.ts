import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'paralize-coin',
  templateUrl: './paralize.component.html',
  styleUrls: ['./paralize.component.scss'],
})
export class ParalizeComponent implements OnInit {

  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {}

}
