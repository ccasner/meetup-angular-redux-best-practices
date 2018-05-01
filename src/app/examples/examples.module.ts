import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// store
import { reducers } from './store';
import { ExampleDataEffects } from './store/example-data/example-data.effects';

// modules
import { ExamplesRoutingModule } from './examples-routing.module';
import { MaterialModule } from '../shared/material/material.module';

// containers
import { ExampleDataComponent } from './containers/example-data/example-data.component';
import { Example2Component } from './containers/example-2/example-2.component';
import { HackerNewsComponent } from './containers/hacker-news/hacker-news.component';

// components
import { ExampleDataDisplayComponent } from './components/example-data-display/example-data-display.component';
import { HackerNewsArticlesDisplayComponent } from './components/hacker-news-articles-display/hacker-news-articles-display.component';

// providers
import { ExampleDataGuard } from './guards/example-data.guard';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    StoreModule.forFeature('examples', reducers),
    EffectsModule.forFeature([ExampleDataEffects])
  ],
  declarations: [
    ExampleDataComponent,
    Example2Component,
    ExampleDataDisplayComponent,
    HackerNewsComponent,
    HackerNewsArticlesDisplayComponent,
  ],
  providers: [ExampleDataGuard],
})
export class ExamplesModule { }
