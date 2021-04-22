import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoisonComponent } from './poison/poison.component';
import { BurnComponent } from './burn/burn.component';
import { SleepComponent } from './sleep/sleep.component';
import { ParalizeComponent } from './paralize/paralize.component';
import { ConfuseComponent } from './confuse/confuse.component';
import { CoinComponent } from './coin/coin.component';

const components = [
    PoisonComponent,
    BurnComponent,
    SleepComponent,
    ParalizeComponent,
    CoinComponent,
    ConfuseComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule
    ],
    exports: components
})
export class CoinsModule { }
