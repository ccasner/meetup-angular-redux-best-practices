import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Input() hasExampleData: boolean;
  @Input() exampleDataCount: number;
  @Input() exampleDataLoading: boolean;
  @Output() toggleSidenav = new EventEmitter();
  @Output() getExampleData = new EventEmitter();

  constructor() { }

  // Bad Example 1 - pass store to dumb components
  /*
    constructor(private store: Store<State>) {
      this.store.pipe(select(getBookData)).subscribe(books => {
        this.exampleDataCount = books.length;
      });
    }
  */

  ngOnInit() {
  }

}
