import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ExamplesEffects } from './store/examples.effects';
import * as fromExamples from './store/examples.reducer';

// modules
import { ExamplesRoutingModule } from './examples-routing.module';

// containers
import { Example1Component } from './containers/example-1/example-1.component';
import { Example2Component } from './containers/example-2/example-2.component';

// components
import { Example1DisplayComponent } from './components/example-1/example-1.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', fromExamples.reducer),
    EffectsModule.forFeature([ExamplesEffects])
  ],
  declarations: [
    Example1Component,
    Example2Component,
    Example1DisplayComponent,
  ]
})
export class ExamplesModule { }
