import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../core/store';
import { SetTitle } from '../../store/app/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private store: Store<State>) {
    this.store.dispatch(new SetTitle('Angular Redux Best Practices'));
  }
}
