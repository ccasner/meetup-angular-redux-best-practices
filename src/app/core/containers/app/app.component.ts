import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../store';
import { ToggleSidenav, SetSidenavOpened } from '../../store/app/app.actions';
import { getSidenavOpened, getTitle } from '../../store/app/app.selectors';
import { getHasExampleData, getTotalExamples, getExampleDataLoading } from '../../../examples/store/example/example-data.selectors';
import { LoadData } from '../../../examples/store/example/examples.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title$: Observable<string>;
  sidenavOpened$: Observable<boolean>;
  hasExampleData$: Observable<boolean>;
  exampleDataCount$: Observable<number>;
  exampleDataLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.title$ = this.store.pipe(select(getTitle));
    this.sidenavOpened$ = this.store.pipe(select(getSidenavOpened));
    this.hasExampleData$ = this.store.pipe(select(getHasExampleData));
    this.exampleDataCount$ = this.store.pipe(select(getTotalExamples));
    this.exampleDataLoading$ = this.store.pipe(select(getExampleDataLoading));
  }

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }
  openSidenav() {
    this.store.dispatch(new SetSidenavOpened(true));
  }
  closeSidenav() {
    this.store.dispatch(new SetSidenavOpened(false));
  }
  getExampleData() {
    this.store.dispatch(new LoadData(1));
  }
}
