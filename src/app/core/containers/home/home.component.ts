import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetTitle } from '../../store/app/app.actions';
import { State } from '../../../core/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<State>) {
    this.store.dispatch(new SetTitle('Angular Redux Best Practices'));
   }

  ngOnInit() {
  }

}
