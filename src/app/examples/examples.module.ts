import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ExamplesEffects } from './store/examples.effects';
import { reducers } from './store';

// modules
import { ExamplesRoutingModule } from './examples-routing.module';
import { MaterialModule } from '../shared/material/material.module';

// containers
import { Example1Component } from './containers/example-1/example-1.component';
import { Example2Component } from './containers/example-2/example-2.component';

// components
import { Example1DisplayComponent } from './components/example-1-display/example-1-display.component';

// providers
import { ExampleDataGuard } from './guards/example-data.guard';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    StoreModule.forFeature('examples', reducers),
    EffectsModule.forFeature([ExamplesEffects])
  ],
  declarations: [
    Example1Component,
    Example2Component,
    Example1DisplayComponent,
  ],
  providers: [ExampleDataGuard],
})
export class ExamplesModule { }
