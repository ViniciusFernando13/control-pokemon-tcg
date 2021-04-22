import { Component, Input, OnInit } from '@angular/core';
import { Conditions } from 'src/app/interfaces/conditions';

@Component({
    selector: 'player-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
    @Input() player: string;

    public bench: Array<any> = [];

    public conditions: Conditions = { poison: false, burn: false, sleep: false, confuse: false, paralyze: false };

    public coin: boolean = false;

    constructor() { }

    /**
     * Toggle informed condition
     * 
     * @param condition 
     */
    public toggleCondition(condition: string) {
        this.conditions[condition] = !this.conditions[condition];
    }

    /**
     * Random toggle coin
     * 
     */
    public toggleCoin() {

        // init temporary coin
        let coin = null;

        // get a random number
        const randomNumber = Math.floor((Math.random() * 10) + 1);

        // verify random number
        if (randomNumber % 2 == 0) {
            coin = false;
        } else {
            coin = true;
        }
        
        // call flip event
        this.flip(coin);
    }

    /**
     * Flip coin
     * 
     * @param coin 
     * @param loop 
     * @returns 
     */
    private flip(coin: boolean, loop = 0) {        
        this.coin = !this.coin;
        if(loop == 5) {
            this.coin = coin;
            return;
        }
        setTimeout(() => {
            this.flip(coin, loop+1);
        }, 700);
    }

    /**
     * Add poke card to bench
     * 
     */
    public addPokeToBench() {
        this.bench.push(this.bench.length);
    }

    /**
     * Delete card
     * 
     */
    public deleteCard(index) {        
        this.bench.splice(Number(index), 1);
    }

    ngOnInit() { }

}
