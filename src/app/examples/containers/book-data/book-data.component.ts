import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../core/store';
import { SetTitle } from '../../../core/store/app/app.actions';
import { BookModel } from '../../models/BookModel.model';
import { ClearBooks, LoadBooks } from '../../store/book-data/book-data.actions';
import { getBookData } from '../../store/book-data/book-data.selectors';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDataComponent {
  exampleData$: Observable<BookModel[]>;

  constructor(private store: Store<State>) {
    this.exampleData$ = this.store.pipe(select(getBookData));
    this.store.dispatch(new SetTitle('Example Data'));
  }

  clearExampleData() {
    this.store.dispatch(new ClearBooks());
  }

  loadData($event: number) {
    this.store.dispatch(new LoadBooks($event));
  }
}
