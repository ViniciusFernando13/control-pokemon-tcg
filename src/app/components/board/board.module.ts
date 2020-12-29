import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardModule } from '../card/card.module';
import { CoinsModule } from '../coins/coins.module';

const components = [
  BoardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CardModule,
    CoinsModule,
    CommonModule
  ],
  exports: components
})
export class BoardModule { }
