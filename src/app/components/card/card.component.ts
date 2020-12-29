import { Component, Input, OnInit } from '@angular/core';
import { Conditions } from 'src/app/interfaces/conditions';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    @Input() active: boolean = false;

    @Input() conditions: Conditions;

    public damage: number = 0;

    constructor() { }

    public controlDamage(damage: number) {
        if (this.damage + damage < 0) this.damage = 0;
        else this.damage += damage;
    }

    ngOnInit() { }

}
