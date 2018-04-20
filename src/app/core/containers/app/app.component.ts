import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../store';
import { ToggleSidenav } from '../../store/app/app.actions';
import { getSidenavOpened, getTitle } from '../../store/app/app.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title$: Observable<string>;
  sidenavOpened$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.title$ = this.store.pipe(select(getTitle));
    this.sidenavOpened$ = this.store.pipe(select(getSidenavOpened));
  }

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }
}
