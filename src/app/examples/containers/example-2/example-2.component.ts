import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-2',
  templateUrl: './example-2.component.html',
  styleUrls: ['./example-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
