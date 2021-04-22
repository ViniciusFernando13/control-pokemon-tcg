import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardsModule } from '../card/cards.module';
import { CoinsModule } from '../coins/coins.module';

const components = [
  BoardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CardsModule,
    CoinsModule,
    CommonModule
  ],
  exports: components
})
export class BoardModule { }
