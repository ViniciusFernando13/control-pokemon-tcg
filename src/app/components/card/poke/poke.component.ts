import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Conditions } from 'src/app/interfaces/conditions';

@Component({
    selector: 'poke-card',
    templateUrl: './poke.component.html',
    styleUrls: ['./poke.component.scss'],
})
export class PokeCardComponent implements OnInit {

    @Input() active: boolean = false;

    @Input() index: number;

    @Input() conditions: Conditions;

    @Output() deleteEvent = new EventEmitter();

    public damage: number = 0;

    public actions: boolean = true;


    constructor() { }

    /**
     * Control damage
     * 
     * @param damage 
     */
    public controlDamage(damage: number) {
        if (this.damage + damage < 0) this.damage = 0;
        else this.damage += damage;
    }

    /**
     * Toggle actions buttons
     * 
     */
    public toggleActions() {
        this.actions = !this.actions;
    }

    /**
     * Call delete event
     * 
     */
    public delete() {        
        this.deleteEvent.emit(this.index.toString());
    }

    ngOnInit() { }

}
