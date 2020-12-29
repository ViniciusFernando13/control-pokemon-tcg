import { Component, Input, OnInit } from '@angular/core';
import { Conditions } from 'src/app/interfaces/conditions';

@Component({
    selector: 'player-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
    @Input() player: string;

    public bench: Array<number> = [0, 1, 2, 3, 4];

    public conditions: Conditions = { poison: false, burn: false, sleep: false, confuse: false, paralyze: false };
    
    constructor() { }

    public toggleCondition(condition:string) {
        this.conditions[condition] = !this.conditions[condition];
    }

    ngOnInit() { }

}
