import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-1-display',
  templateUrl: './example-1-display.component.html',
  styleUrls: ['./example-1-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1DisplayComponent implements OnInit {
  @Input() exampleData: ExampleModel[];
  displayedColumns = ['id', 'title'];

  constructor() { }

  ngOnInit() {
  }

}
