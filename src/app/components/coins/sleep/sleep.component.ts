import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sleep-coin',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss'],
})
export class SleepComponent implements OnInit {

  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {}

}
