import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './poke/poke.component';
import { AddCardComponent } from './add/add.component';

const components = [
    PokeCardComponent,
    AddCardComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule
    ],
    exports: components
})
export class CardsModule { }
