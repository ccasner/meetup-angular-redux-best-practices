import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-1-display',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1DisplayComponent implements OnInit {
  @Input() exampleData: ExampleModel;

  constructor() { }

  ngOnInit() {
  }

}
