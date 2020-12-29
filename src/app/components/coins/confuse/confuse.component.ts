import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'confuse-coin',
  templateUrl: './confuse.component.html',
  styleUrls: ['./confuse.component.scss'],
})
export class ConfuseComponent implements OnInit {

  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {}

}
