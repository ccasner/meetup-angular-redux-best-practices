import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadBooks } from '../../../examples/store/book-data/book-data.actions';
import { getBookDataLoading, getHasBookData, getTotalBooks } from '../../../examples/store/book-data/book-data.selectors';
import { State } from '../../store';
import { SetSidenavOpened, ToggleSidenav } from '../../store/app/app.actions';
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
  hasExampleData$: Observable<boolean>;
  exampleDataCount$: Observable<number>;
  exampleDataLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.title$ = this.store.pipe(select(getTitle));
    this.sidenavOpened$ = this.store.pipe(select(getSidenavOpened));
    this.hasExampleData$ = this.store.pipe(select(getHasBookData));
    this.exampleDataCount$ = this.store.pipe(select(getTotalBooks));
    this.exampleDataLoading$ = this.store.pipe(select(getBookDataLoading));
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
    this.store.dispatch(new LoadBooks(1));
  }

  // Bad Example 2 - tracking scroll events and fire events if it's not data even being used in other components
/*   @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.onWindowScroll.pageYOffset || this.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (offset > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && offset < 10) {
      this.navIsFixed = false;
    }
    this.store.dispatch(new FixedNav(this.navIsFixed));
  } */

/*   <div class="nav-container" [class.fixed]="navIsFixed">
    <nav role="navigation">
      ...
    </nav>
  </div> */
}
