import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../core/store';
import { SetTitle } from '../../../core/store/app/app.actions';
import { ExampleModel } from '../../models/ExampleModel.model';
import { ClearData, LoadData } from '../../store/example-data/example-data.actions';
import { getExampleData } from '../../store/example-data/example-data.selectors';

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
    this.store.dispatch(new SetTitle('Example Data'));
  }

  clearExampleData() {
    this.store.dispatch(new ClearData());
  }

  loadData($event: number) {
    this.store.dispatch(new LoadData($event));
  }
}
