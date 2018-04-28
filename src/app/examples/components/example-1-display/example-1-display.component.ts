import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-1-display',
  templateUrl: './example-1-display.component.html',
  styleUrls: ['./example-1-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1DisplayComponent implements OnInit {
  @Input() exampleData: ExampleModel[];
  @Output() clearExampleData = new EventEmitter();
  displayedColumns = ['id', 'title'];

  constructor() { }

  ngOnInit() {
  }

}
