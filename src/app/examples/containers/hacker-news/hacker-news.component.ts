import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ArticlesModel } from '../../models/HackerNewsModel.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../core/store';
import { getArticles } from '../../store/hacker-news/hacker-news.selectors';
import { ClearArticles, LoadArticles } from '../../store/hacker-news/hacker-news.actions';
import { SetTitle } from '../../../core/store/app/app.actions';


@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HackerNewsComponent {

  articles$: Observable<ArticlesModel[]>;

  constructor(private store: Store<State>) {
    this.articles$ = this.store.pipe(select(getArticles));
    this.store.dispatch(new SetTitle('Hacker News Articles'));
  }

  clearArticles() {
    this.store.dispatch(new ClearArticles());
  }

  loadArticles($event: number) {
    this.store.dispatch(new LoadArticles($event));
  }
}
