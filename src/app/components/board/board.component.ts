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

    public coin: boolean = false;
    
    constructor() { }

    public toggleCondition(condition:string) {
        this.conditions[condition] = !this.conditions[condition];
    }

    public toggleCoin() {
        this.coin = !this.coin;        
        setTimeout(() => {
            if((~~(Math.random() * 2) + 1)) this.coin = true;
            else this.coin = false;
        }, 1000)
    }

    ngOnInit() { }

}
