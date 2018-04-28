import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavContainerComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();
  @Input() opened = false;

  constructor() { }

  ngOnInit() {
  }

}
