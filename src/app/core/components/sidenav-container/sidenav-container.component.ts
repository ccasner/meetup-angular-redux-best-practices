import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavContainerComponent implements OnInit {
  @Input() opened = false;

  constructor() { }

  ngOnInit() {
  }

}
