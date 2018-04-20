import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../core/store';
import { ExampleModel } from '../../models/ExampleModel.model';
import { getExampleData } from '../../store';

@Component({
  selector: 'app-example-1',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1Component implements OnInit {
  exampleData$: Observable<ExampleModel>;
  constructor(private store: Store<State>) {
    this.exampleData$ = this.store.pipe(select(getExampleData));
  }

  ngOnInit() {
  }

}
