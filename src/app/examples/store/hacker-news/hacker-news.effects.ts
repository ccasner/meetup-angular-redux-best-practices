import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs/observable/of';
import { catchError, delay, map, switchMap, first, take } from 'rxjs/operators';
import { TopHeadlinesModel, ArticlesModel } from '../../models/HackerNewsModel.model';
import { HackerNewsActionTypes, LoadArticlesError, LoadArticlesSuccess, LoadArticles } from './hacker-news.actions';

@Injectable()
export class HackerNewsEffects {

  @Effect()
  loadTopHeadlines$ = this.actions$.pipe(
     ofType<LoadArticles>(HackerNewsActionTypes.LoadArticles),
     map(action => action.payload),
     switchMap((dataSet) => {
        const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=b35d15dba5da4ba087e6ddf2e8dc7bb0';
        return this.http.get<TopHeadlinesModel[]>(topHeadlinesUrl).pipe(
          map(resp => resp[0].articles),
          map(data =>  new LoadArticlesSuccess(data.map(item => Object.assign({}, {id: item.source.id, changes: item})))),
          catchError(err => of(new LoadArticlesError(err))),
        );
     }),
    );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
