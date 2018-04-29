import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../core/store';
import { ExampleModel } from '../../models/ExampleModel.model';
import { getExampleData } from '../../store/example-data/example-data.selectors';
import { ClearData, LoadData } from '../../store/example-data/example-data.actions';

@Component({
  selector: 'app-example-data',
  templateUrl: './example-data.component.html',
  styleUrls: ['./example-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDataComponent {
  exampleData$: Observable<ExampleModel[]>;

  constructor(private store: Store<State>) {
    this.exampleData$ = this.store.pipe(select(getExampleData));
  }

  clearExampleData() {
    this.store.dispatch(new ClearData());
  }

  loadData($event: number) {
    this.store.dispatch(new LoadData($event));
  }
}
