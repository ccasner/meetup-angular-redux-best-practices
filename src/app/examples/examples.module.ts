import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// store
import { reducers } from './store';
import { BookDataEffects } from './store/book-data/book-data.effects';
import { HackerNewsEffects } from './store/hacker-news/hacker-news.effects';

// modules
import { ExamplesRoutingModule } from './examples-routing.module';
import { MaterialModule } from '../shared/material/material.module';

// containers
import { BookDataComponent } from './containers/book-data/book-data.component';
import { HackerNewsComponent } from './containers/hacker-news/hacker-news.component';

// components
import { BookDataDisplayComponent } from './components/book-data-display/book-data-display.component';
import { HackerNewsArticlesDisplayComponent } from './components/hacker-news-articles-display/hacker-news-articles-display.component';

// providers
import { ExampleDataGuard } from './guards/example-data.guard';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    StoreModule.forFeature('examples', reducers),
    EffectsModule.forFeature([BookDataEffects, HackerNewsEffects])
  ],
  declarations: [
    BookDataComponent,
    BookDataDisplayComponent,
    HackerNewsComponent,
    HackerNewsArticlesDisplayComponent,
  ],
  providers: [ExampleDataGuard],
})
export class ExamplesModule { }
