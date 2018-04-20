import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
