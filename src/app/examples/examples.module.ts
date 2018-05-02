import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// store
import { reducers } from './store';
import { BookDataEffects } from './store/book-data/book-data.effects';

// modules
import { ExamplesRoutingModule } from './examples-routing.module';
import { MaterialModule } from '../shared/material/material.module';

// containers
import { BookDataComponent } from './containers/book-data/book-data.component';

// components
import { BookDataDisplayComponent } from './components/book-data-display/book-data-display.component';

// providers
import { BookDataGuard } from './guards/book-data.guard';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    StoreModule.forFeature('examples', reducers),
    EffectsModule.forFeature([BookDataEffects])
  ],
  declarations: [
    BookDataComponent,
    BookDataDisplayComponent,
  ],
  providers: [BookDataGuard],
})
export class ExamplesModule { }
